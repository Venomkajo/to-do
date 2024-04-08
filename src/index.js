import './styles.css';
import {createNote, createPage} from './createNote';
import {updateNoteDisplay} from './updateNoteDisplay';

var pages = [];

if (!localStorage.getItem('notes')){
    let note = createNote('Happy', 'I am very happy', '03.03.2045', 'high');
    let page = createPage('Page 1', note);
    pages.push(page);
    
    updateNoteDisplay(pages, 0);
}

console.log("good");