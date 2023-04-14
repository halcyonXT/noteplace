
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
    body: "Beggining of a new note", 
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

/** SELECTION */
const getSelectionIndex = (element) => {
    return {
        start: element.selectionStart,
        end: element.selectionEnd
    }
}
/*****/




/* NOTE FUNCTIONS */
//🗚
window.triggerAlarmPopup = (action) => {
    if (action === "open") {
        document.querySelector('.-alarm-popup').style.display = "flex"
    } else {
        document.querySelector('.-alarm-popup').style.display = "none"
    }
}

window.timerKillswitch = (id, ranOut = false) => {
    clearTimeout(window[`${id}timeout`])
    clearInterval(window[`${id}timer`])
    let index = allNotes.findIndex(el => el.id === id)
    allNotes[index].alarm.set = false
    allNotes[index].alarm.time = 0
    reRenderNote(index)
}

window.triggerAlarm = (id) => {
    let minutes = document.querySelector('.-alarm-minutes').value
    let seconds = document.querySelector('.-alarm-seconds').value
    let index = allNotes.findIndex(el => el.id === id)
    allNotes[index].alarm.set = true
    allNotes[index].alarm.time = Number(seconds) + (minutes * 60)
    let mstime = (Number(seconds) + (minutes * 60)) * 1000
    triggerAlarmPopup("close")
    reRenderNote(index)

    window[`${id}timer`] = setInterval(() => {
        let ind = allNotes.findIndex(el => el.id == id)
        allNotes[ind].alarm.time -= 1;
        reRenderNoteTime(ind)
    }, 1000)

    window[`${id}timeout`] = setTimeout(() => {
        timerKillswitch(id, true)
    }, mstime)
}


window.handleFontSize = (size) => {
    
}

window.mutateColor = (color) => {
    function addElementAtIndex(string, index, element) {
        const start = string.slice(0, index), end = string.slice(index)
        return start + element + end
    }
    try {
        if (elementContainsSelection(document.querySelector('.-main-note-body'))) {
            const newcolor = color.length == 9 ? color.slice(1,7) : color.slice(1)
            const index = allNotes.findIndex(el => el.id == selectedNoteId), selection = getSelectionIndex(document.querySelector('.-main-note-body-textarea'))
            allNotes[index].body = addElementAtIndex(allNotes[index].body, selection.start, `⎊${newcolor}`)
            allNotes[index].body = addElementAtIndex(allNotes[index].body, selection.end + newcolor.length +1, `⎊`)
            bodyProcessor({value: allNotes[index].body}, index)
            renderSelectedNote()
            reRenderNote(index)
            saveAllNotes()
        }
    } catch(ex) {console.log(ex)}
}

window.insertTextMutation = (mutation) => {
    function addElementAtIndex(string, index, element) {
        const start = string.slice(0, index), end = string.slice(index)
        return start + element + end
    }
    try {
        if (elementContainsSelection(document.querySelector('.-main-note-body'))) {
            const index = allNotes.findIndex(el => el.id == selectedNoteId), selection = getSelectionIndex(document.querySelector('.-main-note-body-textarea'))
            allNotes[index].body = addElementAtIndex(allNotes[index].body, selection.start, mutation)
            allNotes[index].body = addElementAtIndex(allNotes[index].body, selection.end + mutation.length, mutation)
            bodyProcessor({value: allNotes[index].body}, index)
            renderSelectedNote()
            reRenderNote(index)
            saveAllNotes()
        }
    } catch(ex) {}
}

window.elementContainsSelection = (el) => {
    var sel = window.getSelection();
    if (sel.rangeCount > 0) {
        for (var i = 0; i < sel.rangeCount; ++i) {
            if (!el.contains(sel.getRangeAt(i).commonAncestorContainer)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

window.getSelectionText = () => {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

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

window.reRenderNoteTime = (index) => {
    let target = document.querySelector('.-main-sidebar-notes')
    try{
        target.children[index].querySelector('.-note-timer').innerHTML = 
        `${(Math.floor(allNotes[index].alarm.time / 60)).toString().padStart(2, '0')}:${(allNotes[index].alarm.time % 60).toString().padStart(2, '0')}`   
    } catch(ex) {}
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
        processVirtualDisplay(apply)
        bodyProcessor(e, index)
    }
    reRenderNote(index)
    saveAllNotes()
}

window.isValidHex = (str) => {
    // Check if string is exactly 6 characters long
    if (str.length !== 6) {
      return false;
    }
    // Check if string contains only hexadecimal characters
    const hexChars = /^[0-9A-Fa-f]+$/;
    if (!hexChars.test(str)) {
      return false;
    }
    // If string passes both tests, it is a valid hex code
    return true;
  }


window.processVirtualDisplay = (value) => {
    try{
        
        document.querySelector('.-main-note-virtual').innerHTML = ''
        let style = getComputedStyle(document.body)
        let color = style.getPropertyValue('--accent-color')
        let maincolor = style.getPropertyValue('--main-color')
        //processing of value
        const replaceEveryOtherClr = (str) => {
            const regex = new RegExp(`(⎊.{6})`, 'g');
            let count = 1;
            return str.replace(regex, (match) => {
              count++;
              return count % 2 === 0 ? 
              `<span style="color:${color}">${isValidHex(match.slice(1)) ? `${match[0]}</span><span style="color:#${match.slice(1)};text-shadow:#${match.slice(1)} 0px 0px 2px">${match.slice(1)}</span>` : `${match[0]}</span>${match.slice(1)}` }` : match;
            });
        }
        
        const invSpan = `<span style="color:${color};filter:invert(1)">`
        const colSpan = `<span style="color:${color}">`
        const endSpan = `</span>`
        
        const replaceEveryOtherFS = (str) => {
            function isNumeric(str) {
                return !isNaN(str) && !isNaN(parseFloat(str));
                }
            const regex = new RegExp(`(▴(?:(?!▴).){0,2})`, 'g');
            let count = 1;
            return str.replace(regex, (match) => {
                count++;
                return count % 2 === 0 ? colSpan + match + endSpan : match;
            });
        }
    
        let string = value;

        //add strikethrough
        string = replaceEveryOther(string, '\\-\\-', invSpan + '--' + endSpan);
        string = string.replaceAll('--', colSpan + '--' + endSpan)
    
        //add bold
        string = replaceEveryOther(string, '\\*\\*', invSpan + '**' + endSpan);
        string = string.replaceAll('**', colSpan + '**' + endSpan)
    
        //add italic
        string = replaceEveryOther(string, '\\^\\^', invSpan + '^^' + endSpan);
        string = string.replaceAll('^^', colSpan + '^^' + endSpan)
    
        //add underline
        string = replaceEveryOther(string, '\\_\\_', invSpan + '__' + endSpan);
        string = string.replaceAll('__', colSpan + '__' + endSpan)
    
        //add colors
        //string = string.replaceAll('⎊', colSpan + '⎊' + endSpan)
        string = replaceEveryOther(string, '⎊', invSpan + '⎊' + endSpan)
        string = replaceEveryOtherClr(string)

        //add fontsize
        string = replaceEveryOther(string, '▴', invSpan + '▴' + endSpan)
        string = replaceEveryOtherFS(string)

        document.querySelector('.-main-note-virtual').innerHTML = string
    } catch (ex) {}
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
    editMode = false
    renderNotes(true)
    renderSelectedNote()
}

window.selectNoteWithID = (id) => {
    lastSelectedNoteId = selectedNoteId
    flushSelected()
    allNotes[allNotes.findIndex(el => el.id == id)].selected = true
    editMode = false
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