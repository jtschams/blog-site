// This file is to prevent transition on load if dark theme selected.
document.body.setAttribute('class', localStorage.getItem('theme-selection'));