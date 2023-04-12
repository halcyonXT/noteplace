
let clientX = 0;
let sidebar = document.querySelector('.-main-sidebar')
let note = document.querySelector('.-main-note')
let initialWidthSidebar
let initialWidthNote 


document.querySelector('.-resizer-notch').addEventListener('mousedown', function(e) {
    clientX = e.clientX
    initialWidthNote = note.clientWidth
    initialWidthSidebar = sidebar.clientWidth

    window.addEventListener('mousemove', mouseMoveHandle)
    window.addEventListener('mouseup', terminateHandle)
})

const mouseMoveHandle = (e) => {
    const diff = clientX - e.clientX
    sidebar.style.width = `${initialWidthSidebar - diff}px`
    note.style.width = `${initialWidthNote + diff}px`
}

const terminateHandle = (e) => {
    window.removeEventListener('mousemove', mouseMoveHandle)
    window.removeEventListener('mouseup', terminateHandle)
}

