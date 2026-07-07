# Changelog

All notable changes to this project will be documented here.

---

## Unreleased

### Planned

- Keep saved records for 30 days.
- Optional notes for each saved order record.
- Daily and weekly summaries.

---

## v2.0.0 Recent Records

### Added

- Added Recent Records section.
- Save each lunch calculation as an individual record.
- Store saved records in localStorage.
- Automatically restore saved records when the page loads.
- Display newest records first.
- Added record cards with meal type, student count, lunch count, and total price.

### Changed

- Clear form after adding a new record based on user feedback.

---

## v1.4.0 Persistent Settings

### Added
- Automatically restore saved settings when the page loads.

### Changed
- Refactored saved data from a single `price` value to a `settings` object.
- Used `JSON.stringify()` and `JSON.parse()` to store and load settings from localStorage.

---

## v1.3.0 Student Count Update

### Added
- Display total number of students.
- Junior students now count as half a lunch (rounded up using `Math.ceil()`).

### Changed
- Updated lunch calculation logic for junior students.
- Fixed GitHub Pages cache issue by using a version query in `script.js`.

---

## v1.2.0 Auto Calculation

### Added
- Remember lunch price using localStorage.
- Auto calculate while typing.
- Clear button.

---

## v1.1.0 User Experience Update

### Added
- Bento calculator.
- Total lunch calculation.
- Total price calculation.
- GitHub Pages deployment.