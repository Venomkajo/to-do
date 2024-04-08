import './styles.css';
import {createNote, createPage} from './createNote';
import {updateNoteDisplay} from './updateNoteDisplay';
import {getNoteForm} from './getNoteForm';

var pages = [];
var currentPage = 0;

if (!localStorage.getItem('notes')){
    let note = createNote('Happy', 'I am very happy', '03.03.2045', 'high');
    let page = createPage('Page 1', note);

    pages.push(page);
    updateNoteDisplay(pages, currentPage);
} else {
    pages = localStorage.getItem('notes');
}

document.getElementById('notesForm').addEventListener('submit', function(event){
    event.preventDefault();

    const newNote = getNoteForm();
    pages[currentPage].notes.push(newNote);
    updateNoteDisplay(pages, currentPage);

})

console.log("good");