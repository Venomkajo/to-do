export function getColorByDate(div){
    const currentDate = new Date();
    const inputDate = new Date(div.value);

    if (inputDate.toDateString() === currentDate.toDateString()){
        div.style.backgroundColor = 'red';
        div.style.color = 'white';
    } else {
        const timeDifference = inputDate.getTime() - currentDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (daysDifference <= 1 && daysDifference > 0){
            div.style.backgroundColor = 'yellow';
            div.style.color = 'black';
        } else if (daysDifference >= 1){
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
        } else {
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
        }
    }
}