// change div style to hide or show it
export function expandDiv(div){
    if (div.style.display === 'none'){
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}

// toggle whether edit is toggleable
export function toggleDivEdit(div){
    if (div.contentEditable === 'true'){
        div.contentEditable = 'false';
        div.style.outline = '';
    } else {
        div.contentEditable = 'true';
        div.style.outline = '3px solid black';
    }
}