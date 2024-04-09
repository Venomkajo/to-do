import './styles.css';
import {createNote, createPage} from './createNote';
import {updateNoteDisplay} from './updateNoteDisplay';
import {getNoteForm} from './getNoteForm';

var pages = [];
var currentPage = 0;

// if no data in local storage create placeholder
if (!localStorage.getItem('notes')){
    let note = createNote('Expand me!', 'Good job!', '2024-03-03', 'LOW');
    let page = createPage('Page 1', note);

    pages.push(page);
    updateNoteDisplay(pages, currentPage);
} else {
    pages = localStorage.getItem('notes');
}

// when form is submitted
document.getElementById('notesForm').addEventListener('submit', function(event){
    event.preventDefault();

    const newNote = getNoteForm();
    pages[currentPage].notes.push(newNote);
    updateNoteDisplay(pages, currentPage);

})

console.log("good");