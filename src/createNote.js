// factory function that returns a note
export function createNote(title, description, dueDate, priority){
    return{
        title,
        description,
        dueDate,
        priority
    };
}


// factory function that returns a page with an array of notes
export function createPage(name, notes){
    return{
        name,
        notes: [notes]
    };
}