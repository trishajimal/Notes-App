# Notes App

A simple browser-based notes app built with HTML, CSS, and vanilla JavaScript. Create editable notes, remove notes you no longer need, and keep your notes in your browser's local storage.

## Features

- Create notes with the **Create Note** button.
- Edit note text directly in the note.
- Delete a note using its trash icon.
- Store notes in the browser's `localStorage`, so they remain available in the same browser.
- Responsive viewport setup and a gradient background.

## Run locally

No installation or build step is required.

1. Download or clone this project.
2. Open `index.html` in a modern web browser.
3. Click **Create Note** to add a note, type into it, and use its trash icon to delete it.

You can also serve the project with any local static web server and open the URL it provides.

## Storage

Notes are stored in the browser's `localStorage` under the key `notes`. Storage is local to the browser and device; it is not synced to an account or shared across browsers.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | App page and notes interface |
| `style.css` | Layout, colors, and note styling |
| `script.js` | Note creation, deletion, and local storage |
| `notes.png` | Notes icon used in the heading |
| `edit.png` | Icon used on the create button |
| `delete.png` | Icon used to delete a note |
