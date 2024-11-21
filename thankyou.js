let noteOutFive=document.querySelector('.thanks-paragraph');

let noteKey=sessionStorage.getItem('stars');
let parsedNoteKey=noteKey.toString()
console.log(noteKey)
noteOutFive.innerText=`you selected ${parsedNoteKey} out of 5`

