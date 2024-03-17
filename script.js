const notes = JSON.parse(localStorage.getItem('notes'))

if (notes){
    notes.forEach(note => addNote(note));
}


function addNote(text = ''){
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="note__head">
            <button class="note__edit"></button>
            <button class="note__delete"></button>
        </div>
        <div class="main hidden"></div>
        <textarea class="note__body"></textarea>
    `
    const deleteBtn = note.querySelector('.note__delete')
    const textArea = note.querySelector('.note__body')
    const main = note.querySelector('.main')
    const editBtn = note.querySelector('.note__edit')
    

    textArea.innerHTML = text;
    main.innerHTML = text;

    deleteBtn.addEventListener('click', () => {
        note.remove()
        lsUpdate();
    })

    textArea.addEventListener('input', (e) => {
        lsUpdate();
    }
    )

    editBtn.addEventListener('click', () => {
        main.innerHTML = textArea.value
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        const anime = note.querySelector('.delete')
        anime.addEventListener('click', () => {
            var e = document.getElementsByTagName('html')[0];
            e.removeChild(document.body);
        })
    })
    document.body.appendChild(note)


}


function lsUpdate(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}





document.querySelector(".add").addEventListener('click', () => addNote())