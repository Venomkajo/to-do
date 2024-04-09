import './styles.css';
import {createNote, createPage} from './createNote';
import {updateNoteDisplay} from './updateNoteDisplay';
import {getNoteForm, getPageForm} from './getNoteForm';

var pages = [];
var currentPage = 0;
let pageListener = true;

// if no data in local storage create placeholder
if (!localStorage.getItem('notes')){
    let note = createNote('Expand me!', 'Good job!', '2024-03-03', 'LOW');
    let page = createPage('Page 1', note);

    pages.push(page);
    updateNoteDisplay(pages, currentPage);
    addPageEventListener();
} else {
    pages = localStorage.getItem('notes');
    updateNoteDisplay(pages, currentPage);
    addPageEventListener();
}

// when new page is submitted
document.getElementById('pageForm').addEventListener('submit', function(event){
    event.preventDefault();

    const pageName = getPageForm();
    const note = createNote('Expand me!', 'Good job!', '2024-03-03', 'LOW');
    const page = createPage(pageName, note);

    pages.push(page);
    updateNoteDisplay(pages, currentPage);
    addPageEventListener();
})

// when new note is submitted
document.getElementById('notesForm').addEventListener('submit', function(event){
    event.preventDefault();

    const newNote = getNoteForm();
    pages[currentPage].notes.push(newNote);
    updateNoteDisplay(pages, currentPage);
    addPageEventListener();

})

function addPageEventListener(){
    const everyPage = document.querySelectorAll('.notes-page');
    everyPage.forEach(page => {
        page.addEventListener('click', function(){
            
            currentPage = page.dataset.order;
        })
    });
}



console.log("good");