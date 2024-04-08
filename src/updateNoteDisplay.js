import { expandDiv, removeDiv } from "./noteButtons";

export function updateNoteDisplay(pages, currentPage){
    let notesPages = document.getElementById('notesPages');
    let notesContent = document.getElementById('notesContent');

    // remove elements from page
    while (notesPages.firstChild){
        notesPages.removeChild(notesPages.firstChild);
    }
    while (notesContent.firstChild){
        notesContent.removeChild(notesContent.firstChild);
    }

    // render pages
    for (let i = 0; i < pages.length; i++){
        let page = pages[i];

        let pageDiv = document.createElement('div');
        pageDiv.classList.add('notes-page')
        pageDiv.innerText = page.name;

        notesPages.appendChild(pageDiv);
    }

    // render every note in current page
    for (let i = 0; i < pages[currentPage].notes.length; i++){
        let page = pages[currentPage];

        let notesNoteDiv = document.createElement('div');
        notesNoteDiv.classList.add('notes-note');
        notesContent.appendChild(notesNoteDiv);

        let notesTitleDiv = document.createElement('div');
        notesTitleDiv.classList.add('notes-title');
        notesTitleDiv.innerText = page.notes[i].title;
        notesNoteDiv.appendChild(notesTitleDiv);

        let notesDueDateDiv = document.createElement('div');
        notesDueDateDiv.classList.add('notes-date');
        notesDueDateDiv.innerText = page.notes[i].dueDate;
        notesNoteDiv.appendChild(notesDueDateDiv);

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
        expandButton.addEventListener('click', function() {
            expandDiv(notesHiddenDiv);
        });

        let notesDescriptionDiv = document.createElement('div');
        notesDescriptionDiv.classList.add('notes-description');
        notesDescriptionDiv.innerText = page.notes[i].description;
        notesHiddenDiv.appendChild(notesDescriptionDiv);

        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        notesHiddenDiv.appendChild(editButton);
        editButton.addEventListener('click', function() {

        });

        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        notesHiddenDiv.appendChild(removeButton);
        removeButton.addEventListener('click', function() {
            removeDiv(notesNoteDiv, notesHiddenDiv);
        });

    }
}
