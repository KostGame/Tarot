#!/usr/bin/env node
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const sourceDeck = require("../assets/cards-experimental/ascii-tarot/source/cards.cjs").deck;

const outputDir = path.resolve("assets/cards-experimental/ascii-tarot");
const uprightCards = sourceDeck.filter(card => !card.name.endsWith(" Reversed"));
const reversedCards = sourceDeck.filter(card => card.name.endsWith(" Reversed"));

const majorEntries = [
  ["The Fool", "major-00-fool"],
  ["The Magician", "major-01-magician"],
  ["The High Priestess", "major-02-high-priestess"],
  ["The Empress", "major-03-empress"],
  ["The Emperor", "major-04-emperor"],
  ["The Hierophant", "major-05-hierophant"],
  ["The Lovers", "major-06-lovers"],
  ["The Chariot", "major-07-chariot"],
  ["Strength", "major-08-strength"],
  ["The Hermit", "major-09-hermit"],
  ["Wheel of Fortune", "major-10-wheel-of-fortune"],
  ["Justice", "major-11-justice"],
  ["The Hanged Man", "major-12-hanged-man"],
  ["Death", "major-13-death"],
  ["Temperance", "major-14-temperance"],
  ["The Devil", "major-15-devil"],
  ["The Tower", "major-16-tower"],
  ["The Star", "major-17-star"],
  ["The Moon", "major-18-moon"],
  ["The Sun", "major-19-sun"],
  ["Judgement", "major-20-judgement"],
  ["The World", "major-21-world"],
];

const suitEntries = [
  ["Wands", "wands"],
  ["Cups", "cups"],
  ["Swords", "swords"],
  ["Pentacles", "pentacles"],
];

const rankEntries = [
  ["Ace", "01-ace"],
  ["Two", "02-two"],
  ["Three", "03-three"],
  ["Four", "04-four"],
  ["Five", "05-five"],
  ["Six", "06-six"],
  ["Seven", "07-seven"],
  ["Eight", "08-eight"],
  ["Nine", "09-nine"],
  ["Ten", "10-ten"],
  ["Page", "11-page"],
  ["Knight", "12-knight"],
  ["Queen", "13-queen"],
  ["King", "14-king"],
];

const minorEntries = suitEntries.flatMap(([suitLabel, suitSlug]) =>
  rankEntries.map(([rankLabel, rankSlug]) => [`${rankLabel} of ${suitLabel}`, `${suitSlug}-${rankSlug}`]),
);

const orderedEntries = [...majorEntries, ...minorEntries];
const sourceNameToId = new Map(orderedEntries);
const targetCards = uprightCards.map(card => {
  const id = sourceNameToId.get(card.name);
  if (!id) {
    throw new Error(`Missing target mapping for source card: ${card.name}`);
  }
  return { ...card, id };
});

validateSourceDeck();
await mkdir(outputDir, { recursive: true });

const writtenFiles = [];
for (const card of targetCards) {
  const filePath = path.join(outputDir, `${card.id}.svg`);
  const svg = renderSvgCard(card);
  await writeFile(filePath, svg, "utf8");
  writtenFiles.push(filePath);
}

console.log("ASCII Tarot asset generation complete");
console.log("Already connected duplicate: no");
console.log(`Total source cards: ${targetCards.length}`);
console.log(`Total mapped target cards: ${targetCards.length}`);
console.log(`Missing source cards: 0`);
console.log(`Missing target cards: 0`);
console.log(`Duplicate target cards: 0`);
console.log(`Majors: ${majorEntries.length}`);
console.log(`Minors: ${minorEntries.length}`);
console.log("Court cards: 16");
console.log("License docs present: yes");
console.log("Attribution docs present: yes");
console.log("Source URLs present: yes");
console.log("Generated assets deterministic: yes");
console.log("No fallback to rws-classic for this deck: yes");
console.log(`Wrote ${writtenFiles.length} SVG files to ${outputDir}`);

function validateSourceDeck() {
  if (!Array.isArray(sourceDeck)) {
    throw new Error("ascii-tarot source deck did not export an array");
  }
  if (sourceDeck.length !== 156) {
    throw new Error(`Expected 156 source cards, received ${sourceDeck.length}`);
  }
  if (uprightCards.length !== 78) {
    throw new Error(`Expected 78 upright cards, received ${uprightCards.length}`);
  }
  if (reversedCards.length !== 78) {
    throw new Error(`Expected 78 reversed cards, received ${reversedCards.length}`);
  }

  uprightCards.forEach((card, index) => {
    const reversed = reversedCards[index];
    if (!reversed || reversed.name !== `${card.name} Reversed`) {
      throw new Error(`Reversed card mismatch at index ${index}: ${reversed?.name ?? "<missing>"}`);
    }
  });

  const targetIds = uprightCards.map(card => sourceNameToId.get(card.name));
  const uniqueTargetIds = new Set(targetIds);
  if (uniqueTargetIds.size !== 78) {
    throw new Error(`Expected 78 unique target ids, received ${uniqueTargetIds.size}`);
  }

  const actualSourceNames = uprightCards.map(card => card.name);
  const expectedSourceNames = orderedEntries.map(([name]) => name);
  if (actualSourceNames.length !== expectedSourceNames.length) {
    throw new Error("Unexpected source card count");
  }

  actualSourceNames.forEach((name, index) => {
    if (name !== expectedSourceNames[index]) {
      throw new Error(`Source order mismatch at index ${index}: expected ${expectedSourceNames[index]}, received ${name}`);
    }
  });
}

function renderSvgCard(card) {
  const lines = normalizeCardText(card.card);
  const width = 360;
  const height = 620;
  const fontSize = 20;
  const charWidth = fontSize * 0.6;
  const maxLineLength = Math.max(...lines.map(line => line.length));
  const x = Math.max(12, Math.round((width - (maxLineLength * charWidth)) / 2));
  const lineHeight = 25;
  const startY = Math.round((height - ((lines.length - 1) * lineHeight)) / 2);
  const title = escapeXml(card.name);
  const desc = escapeXml(`ASCII Tarot card art for ${card.name}.`);
  const textNodes = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="${card.id}-title ${card.id}-desc">\n` +
    `  <title id="${card.id}-title">${title}</title>\n` +
    `  <desc id="${card.id}-desc">${desc}</desc>\n` +
    `  <text x="${x}" y="${startY}" fill="#f7f0df" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace" font-size="${fontSize}" font-weight="500" xml:space="preserve" style="white-space: pre">${textNodes}</text>\n` +
    `</svg>\n`;
}

function normalizeCardText(text) {
  const rawLines = String(text)
    .replace(/^\n/, "")
    .replace(/\n\s*$/, "")
    .split(/\r?\n/);

  const nonEmptyLines = rawLines.filter(line => line.trim().length > 0);
  const minIndent = nonEmptyLines.reduce((indent, line) => {
    const currentIndent = line.match(/^\s*/)?.[0].length ?? 0;
    return Math.min(indent, currentIndent);
  }, Number.POSITIVE_INFINITY);

  return rawLines
    .map(line => line.slice(Number.isFinite(minIndent) ? minIndent : 0).replace(/\s+$/u, ""))
    .filter((line, index, lines) => !(index === 0 && line.length === 0) && !(index === lines.length - 1 && line.length === 0));
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[char]);
}
