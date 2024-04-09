// change div style to hide or show it
export function expandDiv(div){
    if (div.style.display === 'none'){
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}

// remove two divs at once
export function removeDiv(div1, div2){
    div1.remove();
    div2.remove();
}

// make div editable or not
export function toggleDivEdit(div){
    if (div.contentEditable === 'true'){
        div.contentEditable = 'false';
        div.style.outline = '';
    } else {
        div.contentEditable = 'true';
        div.style.outline = '3px solid black';
    }
}