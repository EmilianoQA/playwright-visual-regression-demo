# Playwright Visual Regression Demo

A mini exploration project of Visual Regression Testing using Playwright with TypeScript.

## Objective

Implement automated tests that detect unexpected visual changes in a web application using snapshots.

## Project Scope

- Full page screenshot with `toHaveScreenshot`
- Screenshot of a specific component
- Baseline image management
- Pixel-to-pixel comparison in subsequent runs
- Simulation of visual changes to validate difference detection (diff)

## Tech Stack

- Playwright
- TypeScript
- Node.js

## How to Run the Project

### Install dependencies

```bash
npm install

Run the tests

npx playwright test

Update snapshots (when visual change is intentional)

npx playwright test --update-snapshots

Note

Visual Regression Testing does not replace functional tests but complements the automation strategy by protecting the visual stability of the interface against changes or refactors.
Author

Emiliano Maure
QA Automation