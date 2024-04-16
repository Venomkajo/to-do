import './styles.css';
import {createNote, createPage} from './createNote';
import {updateNoteDisplay} from './updateNoteDisplay';
import {getNoteForm, getPageForm} from './getNoteForm';

var pages = [];
var currentPage = 0;

// if no data in local storage create placeholder
if (!localStorage.getItem('notes')){
    let note = createNote('Expand me!', 'Good job!', '2025-12-12', 'LOW');
    let page = createPage('First page!', note);

    pages.push(page);
    updateNoteDisplay(pages, currentPage);
    localStorage.setItem('notes', JSON.stringify(pages));
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
} else {
    pages = JSON.parse(localStorage.getItem('notes'));
    updateNoteDisplay(pages, currentPage);
}

// when new page is submitted
document.getElementById('pageForm').addEventListener('submit', function(event){
    event.preventDefault();

    const pageName = getPageForm();
    const note = createNote('New page!', '...', '2025-12-12', 'LOW');
    const page = createPage(pageName, note);

    // get updated date from dynamic event listeners
    pages = JSON.parse(localStorage.getItem('notes'));
    currentPage = JSON.parse(localStorage.getItem('currentPage'));

    pages.push(page);
    localStorage.setItem('notes', JSON.stringify(pages));
    updateNoteDisplay(pages, currentPage);
})

// when new note is submitted
document.getElementById('notesForm').addEventListener('submit', function(event){
    event.preventDefault();
    if (pages && pages.length !== 0){

        // get updated date from dynamic event listeners
        pages = JSON.parse(localStorage.getItem('notes'));
        currentPage = JSON.parse(localStorage.getItem('currentPage'));
    
        const newNote = getNoteForm();
        pages[currentPage].notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(pages));
        updateNoteDisplay(pages, currentPage);
    }
})

console.log("loading successful");