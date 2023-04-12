/* GENERATOR FUNCTIONS */

window.idGenerator = () => Math.trunc(Math.random() * 100000000000000).toString(32)
window.getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

/*************/




/* NOTE STYLES */

window.mouseEnterStyles = (e) => {
    if (e.dataset.noteid === selectedNoteId) {return}
    let h2 = document.querySelector(`[data-noteid="${e.dataset.noteid}"] h2`);
    let p = document.querySelector(`[data-noteid="${e.dataset.noteid}"] p`);
    h2.style.color = `var(--accent-color)` 
    h2.style.letterSpacing = '1px'
    p.style.color = `var(--accent-color)`
}
window.mouseLeaveStyles = (e) => {
    if (e.dataset.noteid === selectedNoteId) {return}
    let h2 = document.querySelector(`[data-noteid="${e.dataset.noteid}"] h2`);
    let p = document.querySelector(`[data-noteid="${e.dataset.noteid}"] p`);
    h2.style.color = `var(--submain-color)` 
    h2.style.letterSpacing = '0px'
    p.style.color = `var(--sub-submain-color)`
}

/*************/





/* NOTE VARIABLES */

window.sampleNote = (id) => ({
    title: "New title", 
    body: "Beginning of a new note", 
    bodyPreview: "Beggining of a new note", 
    id: id, 
    selected: false, 
    date: getCurrentDate(), 
    starred: false
})
window.allNotes = JSON.parse(localStorage.getItem("allNotes")) || [{title: "Welcome", body: "Welcome to Noteplace. Start by creating a note", id: idGenerator()}]
window.selectedNoteId = ''
window.lastSelectedNoteId = ''
window.editMode = false
let stillHovered = false

window.getInfobox = (string) => {
    return `<div class="-infobox-wrapper">
        ⏶
        <div class="-infobox">
            ${string}
        </div>
    </div>`
}

/*************/




/* NOTE FUNCTIONS */

window.moveStarredToTop = () => {
    let starred = [], nonstarred = []
    for (let i in allNotes) {
        if (allNotes[i].starred) {
            starred.push(allNotes[i])
        } else nonstarred.push(allNotes[i])
    }
    allNotes = [...starred, ...nonstarred]
}

window.reRenderNote = (index) => {
    let target = document.querySelector('.-main-sidebar-notes')
    let string = getNoteElement(allNotes[index]);
    target.children[index].innerHTML = string
}

window.saveAllNotes = () => {
    localStorage.setItem("allNotes", JSON.stringify(allNotes))
}

window.deleteNote = async (id) => {
    const animation = document.querySelectorAll(`[data-noteid='${id}']`)[0].animate([
        {transform: 'translateX(0)', opacity: '1'},
        {transform: 'translateX(-3vw)', opacity: '0'}
    ], {
        duration: 200,
        iterations: 1,
        easing: 'ease-in-out'
    })
    await animation.finished
    selectedNoteId = ''; lastSelectedNoteId = ''
    allNotes.splice(allNotes.findIndex(el => el.id == id), 1)
    renderNotes()
    renderSelectedNote()
    saveAllNotes()
}

window.deleteNotes = (arr = null) => {
    debugger
    if (!arr) {return}
    for (let i of arr) {
        if (selectedNoteId == i) {selectedNoteId = ''; lastSelectedNoteId = ''}
        allNotes.splice(allNotes.findIndex(el => el.id == i), 1)
    }
    renderNotes()
    renderSelectedNote()
}

window.updateSelectedNote = (e, id, key) => {
    let index = allNotes.findIndex(el => el.id === id)
    let apply = e.value.replaceAll('<', '<​')
    allNotes[index][key] = `${apply}`
    if (key == 'body') {
        bodyProcessor(e, index)
    }
    reRenderNote(index)
    saveAllNotes()
}

window.flushSelected = () => {for (let el of allNotes) {el.selected = false}}

window.selectNote = (target) => {
    if (selectedNoteId === target.dataset.noteid) {return} //cannot select the same note multiple times
    lastSelectedNoteId = selectedNoteId
    for (let el of allNotes) {
        if (el.id !== target.dataset.noteid) {
            el.selected = false
        } else el.selected = true
    }
    renderNotes(true)
    renderSelectedNote()
}

window.selectNoteWithID = (id) => {
    lastSelectedNoteId = selectedNoteId
    flushSelected()
    allNotes[allNotes.findIndex(el => el.id == id)].selected = true
    renderNotes(true)
    renderSelectedNote()
}

window.createNewNote = () => {
    const id = idGenerator()
    let index = 0;
    for (let i in allNotes) {
        if (!allNotes[i].starred) {index = i; break}
    }
    let starred = allNotes.slice(0, index)
    allNotes.splice(0, index)
    let nonstarred = allNotes
    allNotes.unshift(sampleNote(id))
    allNotes = [...starred, ...nonstarred]
    selectNoteWithID(id)
    saveAllNotes()
}

window.toggleStarred = (id) => {
    const index = allNotes.findIndex(e => e.id == id)
    allNotes[index].starred = !allNotes[index].starred
    moveStarredToTop()
    renderNotes()
    renderSelectedNote()
    saveAllNotes()
}

window.toggleEditMode = () => {
    editMode = !editMode
    renderSelectedNote()
}

let inter
window.toggleInfobox = (el, action) => {
    if (action === 'enter') {
        stillHovered = true
        inter = setTimeout(() => {
            if (stillHovered) {
                el.querySelector('.-infobox-wrapper').style.display = 'block'
            }
        }, 500)
    } else {
        stillHovered = false
        clearTimeout(inter)
        el.querySelector('.-infobox-wrapper').style.display = 'none'
    }
}

/*************/