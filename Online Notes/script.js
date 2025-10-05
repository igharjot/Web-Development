document.addEventListener("DOMContentLoaded", loadNotes);

const addNoteBtn = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

addNoteBtn.addEventListener("click", addNote);
toggleDarkModeBtn.addEventListener("click", toggleDarkMode);

function addNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <textarea oninput="autoExpand(this)" placeholder="Write your note here..."></textarea>
        <button class="deleteBtn">❌</button>
    `;

    note.querySelector("textarea").addEventListener("input", saveNotes);
    note.querySelector(".deleteBtn").addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    notesContainer.appendChild(note);
    saveNotes();
}

function saveNotes() {
    const notes = Array.from(document.querySelectorAll(".note textarea")).map(note => note.value);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => addNote(note));
}

/* Auto Expand Textarea */
function autoExpand(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

/* Dark Mode Toggle */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}