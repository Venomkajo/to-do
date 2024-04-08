export function updateNoteDisplay(pages, currentPage){
    let notesPages = document.getElementById('notesPages');
    let notesContent = document.getElementById('notesContent');

    while (notesPages.firstChild){
        notesPages.removeChild(notesPages.firstChild);
    }
    while (notesContent.firstChild){
        notesContent.removeChild(notesContent.firstChild);
    }

    for (let i = 0; i < pages.length; i++){
        let page = pages[i];

        let pageDiv = document.createElement('div');
        pageDiv.classList.add('notes-page')
        pageDiv.innerText = page.name;

        notesPages.appendChild(pageDiv);
    }

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

        notesNoteDiv.addEventListener('click', function(){
            alert(page.notes[i].description);
        })
    }
}
