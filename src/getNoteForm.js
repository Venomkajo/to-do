export function getNoteForm(){

        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const description = document.getElementById('description').value;

        if (title && description && dueDate && priority){
            return{
                title,
                description,
                dueDate,
                priority
            };
        } else {
            return;
        }
}