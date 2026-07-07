# Changelog

All notable changes to this project will be documented here.

---

## v1.4 Persistent Settings

### Changed
- Refactored saved data from a single `price` value to a `settings` object.
- Used `JSON.stringify()` and `JSON.parse()` to store and load settings from localStorage.

---

## v1.3 Student Count Update

### Added
- Display total number of students.
- Junior students now count as half a lunch (rounded up using `Math.ceil()`).

### Changed
- Updated lunch calculation logic for junior students.
- Fixed GitHub Pages cache issue by using a version query in `script.js`.

---

## v1.2 Auto Calculation

### Added
- Remember lunch price using localStorage.
- Auto calculate while typing.
- Clear button.

---

## v1.1 User Experience Update

### Added
- Bento calculator.
- Total lunch calculation.
- Total price calculation.
- GitHub Pages deployment.