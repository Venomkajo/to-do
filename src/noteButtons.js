export function expandDiv(div){
    if (div.style.display === 'none'){
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}

export function removeDiv(div1, div2){
    div1.remove();
    div2.remove();
}