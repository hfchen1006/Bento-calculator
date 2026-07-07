# Changelog

All notable changes to this project will be documented here.

---

## Unreleased

### Planned

- Keep saved records for 30 days.
- Daily and weekly summaries.

---

## v2.2.0 - Record Management

### Added

- Added the ability to delete individual records.
- Added a confirmation dialog before deleting a record.
- Introduced a Record Actions area in the Record Card header.

### Changed

- Moved record actions to the top-right corner of each Record Card.
- Improved the delete button styling for a cleaner interface.

---

## v2.1.0 - Order Notes

### Added

- Added notes for each saved record.
- Added "Add Note" and "Edit Note" actions.
- Notes are saved with each individual record.
- Notes persist using localStorage.
- Display notes in each Record Card.

### Changed

- Improved Record Card layout with a dedicated Notes section.

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