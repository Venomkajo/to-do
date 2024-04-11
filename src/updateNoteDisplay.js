import { expandDiv, removeDiv, toggleDivEdit } from "./noteButtons";
import { getColorByDate } from "./getColorByDate";

// update both pages and notes
export function updateNoteDisplay(pages, currentPage){
    renderPages(pages, currentPage);
    renderNotes(pages, currentPage);
}

// add page form
export function createPageForm(){
    let formDiv = document.querySelector('.notes-form');

    let pageForm = document.createElement('form');
    pageForm.id = 'pageForm';

    let pageNameLabel = document.createElement('label');
    pageNameLabel.for = 'pageName';
    pageNameLabel.innerText = 'New page name';
    pageForm.appendChild(pageNameLabel);

    let pageName = document.createElement('input');
    pageName.placeholder = 'Name';
    pageName.id = 'pageName';
    pageName.autocomplete = 'off';
    pageForm.appendChild(pageName);

    let pageButton = document.createElement('button');
    pageButton.innerText = 'Add page';
    pageForm.appendChild(pageButton);

    formDiv.appendChild(pageForm);
}

// render only pages
function renderPages(pages, currentPage){
    let notesPages = document.getElementById('notesPages');

    // remove pages from website
    while (notesPages.firstChild){
        notesPages.removeChild(notesPages.firstChild);
    }

    // render pages
    for (let i = 0; i < pages.length; i++){
        let page = pages[i];

        let pageDiv = document.createElement('div');
        pageDiv.classList.add('notes-page')
        pageDiv.innerText = page.name;

        let pageRemoveButton = document.createElement('button');
        pageRemoveButton.innerText = 'Remove';
        pageRemoveButton.classList = 'page-remove';
        pageDiv.appendChild(pageRemoveButton);

        // switch current page
        pageDiv.addEventListener('click', function(){
            currentPage = i;
            localStorage.setItem('currentPage', JSON.stringify(currentPage));
            updateNoteDisplay(pages, currentPage);
        })

        // remove a page
        pageRemoveButton.addEventListener('click', function(){
            pages.splice(i, 1);
            localStorage.setItem('notes', JSON.stringify(pages));
            updateNoteDisplay(pages, currentPage);
        })

        notesPages.appendChild(pageDiv);
    }
}

// render only notes
function renderNotes(pages, currentPage){
    let notesContent = document.getElementById('notesContent');

    // remove notes from website
    while (notesContent.firstChild){
        notesContent.removeChild(notesContent.firstChild);
    }

    // render every note in current page
    for (let i = 0; i < pages[currentPage].notes.length; i++){
        let page = pages[currentPage];
        
        // main div
        let notesNoteDiv = document.createElement('div');
        notesNoteDiv.classList.add('notes-note');
        notesContent.appendChild(notesNoteDiv);
    
        let notesTitleDiv = document.createElement('div');
        notesTitleDiv.classList.add('notes-title');
        notesTitleDiv.innerText = page.notes[i].title;
        notesTitleDiv.contentEditable = false;
        notesNoteDiv.appendChild(notesTitleDiv);
    
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.value = page.notes[i].dueDate;
        dueDateInput.classList.add('notes-date');
        dueDateInput.disabled = true;

        // color date input
        getColorByDate(dueDateInput);

        notesNoteDiv.appendChild(dueDateInput);

        let notesPriorityDiv = document.createElement('div');
        notesPriorityDiv.classList.add('notes-priority');
        notesPriorityDiv.innerText = page.notes[i].priority;
        notesNoteDiv.appendChild(notesPriorityDiv);

        // render expanding div
        let notesHiddenDiv = document.createElement('div');
        notesHiddenDiv.classList.add('notes-hidden');
        notesHiddenDiv.style.display = 'none';
        notesContent.appendChild(notesHiddenDiv);

        let expandButton = document.createElement('button');
        expandButton.innerText = 'v';
        notesNoteDiv.appendChild(expandButton);

        // show hidden div
        expandButton.addEventListener('click', function() {
            expandDiv(notesHiddenDiv);
        });

        let notesDescriptionDiv = document.createElement('div');
        notesDescriptionDiv.classList.add('notes-description');
        notesDescriptionDiv.innerText = page.notes[i].description;
        notesDescriptionDiv.contentEditable = false;
        notesHiddenDiv.appendChild(notesDescriptionDiv);

        let saveButton = document.createElement('button');
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        notesHiddenDiv.appendChild(editButton);

        // allow editing of text
        editButton.addEventListener('click', function() {

            toggleDivEdit(notesDescriptionDiv);
            toggleDivEdit(notesTitleDiv);

            saveButton.disabled = false;
            dueDateInput.disabled = false;
            editButton.disabled = true;
        });

        saveButton.innerText = 'Save';
        notesHiddenDiv.appendChild(saveButton);
        saveButton.disabled = true;

        // when pressed save edits
        saveButton.addEventListener('click', function() {

            toggleDivEdit(notesDescriptionDiv);
            toggleDivEdit(notesTitleDiv);

            saveButton.disabled = true;
            editButton.disabled = false;
            dueDateInput.disabled = true;

            page.notes[i].description = notesDescriptionDiv.innerText;
            page.notes[i].title = notesTitleDiv.innerText;
            page.notes[i].dueDate = dueDateInput.value;
        });

        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        notesHiddenDiv.appendChild(removeButton);

        // remove a note
        removeButton.addEventListener('click', function() {
            notesNoteDiv.remove();
            notesHiddenDiv.remove();

            pages[currentPage].notes.splice(i, 1);
            localStorage.setItem('notes', JSON.stringify(pages));
        });

    }
}