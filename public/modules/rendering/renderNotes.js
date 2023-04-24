/**
 * 
 * This function is used to render the notes from getNoteElement into a list
 * in the sidebar
 * @param {Boolean} select
 * @return {void}
 *  
 */

const renderNotes = (select = false) => {
    let target = document.querySelector('.-main-sidebar-notes')
    target.innerHTML = ''
    let HTML = []
    for (let el of allNotes) {
        if (el.starred) {
            HTML.push(
            `
                <div 
                    class="
                        -main-sidebar-note-card 
                        ${el.selected && select && `cardSelectAnimation`} 
                        ${el.id === lastSelectedNoteId && select && 'cardDeselectAnimation'}
                        ${el.selected && !select && `card-selected`}
                    "
                    data-noteid="${el.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(el)}
                </div>
            `)
        } else { //if not starred
            HTML.push(`
                <div class="
                        -main-sidebar-note-card 
                        ${el.selected && select && `cardSelectAnimation`} 
                        ${el.selected && !select && `card-selected`}
                        ${el.id === lastSelectedNoteId && select && 'cardDeselectAnimation'}
                    "
                    data-noteid="${el.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(el)}
                </div>
            `)
        }
        
    }
    for (let el of HTML) {
        target.innerHTML += el
    }
}