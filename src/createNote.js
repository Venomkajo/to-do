export function createNote(title, description, dueDate, priority){
    return{
        title,
        description,
        dueDate,
        priority
    };
}

export function createPage(name, notes){
    return{
        name,
        notes: [notes]
    };
}