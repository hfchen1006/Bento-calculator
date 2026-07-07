# Changelog

All notable changes to this project will be documented here.

---

## Upcoming

### Planned

- Recent calculation records.
- Keep saved records for 30 days.
- Optional notes for each saved order record.
- Daily and weekly summaries.

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