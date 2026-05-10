# Firebase daily counter

This document describes the anonymous daily counter used by the Tarot app.

## Purpose

The counter shows simple aggregated daily usage:

- total cards selected today
- daily draws in `Карта дня`
- daily draws in `Совет по вопросу`

It is intentionally small and non-intrusive so it does not compete with the main reading flow.

## What is collected

Only aggregated counters are stored in Firebase Realtime Database.

No user identifiers are collected:

- no IP address
- no user-agent
- no device id
- no cookie id
- no email
- no uid
- no analytics events
- no personal profile data

## Database paths

The app writes and reads from these Realtime Database paths:

- `publicStats/YYYY-MM-DD/total`
- `publicStats/YYYY-MM-DD/day`
- `publicStats/YYYY-MM-DD/advice`

`YYYY-MM-DD` uses the user’s local date.

## Safety model

The counter depends on Firebase Realtime Database Rules. The client assumes that:

- only the `publicStats` branch is readable
- writes are restricted to the three aggregate metrics above
- each write is an atomic increment of `1`

If Firebase or the Rules reject a request, the app stays usable and only logs a warning to the console.

## How to disable

To turn the counter off later:

1. Remove or comment out the Firebase module imports in `index.html`.
2. Remove the counter render block from the UI.
3. Remove the `refreshFirebaseDailyCounter()` call on startup.
4. Remove the `incrementFirebaseDailyCounter(...)` calls from the draw actions.
5. Tighten or remove the Realtime Database Rules for `publicStats`.

## Notes

The app does not use Auth, Firestore, Cloud Functions, or Firebase Analytics.
