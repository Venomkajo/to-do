export function updateNoteDisplay(pages, currentPage){
    let notesPages = document.getElementById('notesPages');
    let notesContent = document.getElementById('notesContent');

    for (let i = 0; i < pages.length; i++){
        let page = pages[i];

        let pageDiv = document.createElement('div');
        pageDiv.classList.add('notes-page')
        pageDiv.innerText = page.name;

        notesPages.appendChild(pageDiv);
    }
    
    console.log("currentPage:", currentPage);
    console.log("pages[currentPage]:", pages[currentPage]);
    console.log("pages[currentPage].notes:", pages[currentPage].notes);

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
    }
}
