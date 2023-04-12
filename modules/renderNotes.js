

window.getNoteElement = (el) => {
    let HTML = []
    let selectedModules = []
        selectedModules[0] = !el.selected ? "" : `<div class="-main-sidebar-note-buttons">
            <div class="-main-sidebar-note-buttons-button -button-animation" 
                onclick="deleteNote('${el.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation"
                onclick="toggleStarred('${el.id}')">
                <svg height="1.1rem" width="1.1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 473.486 473.486" xml:space="preserve" ${el.starred && `fill="var(--accent-color)"`}>
                    <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                    237.732,386.042 384.416,460.829 357.032,298.473 "/>
                </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation">
                <svg width="1.1rem" height="1.1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 5V8.00415C7.50208 8.01124 7.05704 8.03041 6.67222 8.08214C6.0167 8.17028 5.38835 8.36902 4.87869 8.87868C4.36902 9.38835 4.17028 10.0167 4.08215 10.6722C3.99991 11.2839 3.99995 12.0477 4 12.9342V17.0658C3.99995 17.9523 3.99991 18.7161 4.08215 19.3278C4.17028 19.9833 4.36902 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28387 22.0001 8.0477 22.0001 8.93417 22H15.0659C15.9523 22.0001 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0658V12.9342C20.0001 12.0477 20.0001 11.2839 19.9179 10.6722C19.8297 10.0167 19.631 9.38835 19.1213 8.87868C18.6117 8.36902 17.9833 8.17028 17.3278 8.08215C16.943 8.03041 16.4979 8.01124 16 8.00415V5C16 3.34315 14.6569 2 13 2H11C9.34316 2 8.00001 3.34315 8.00001 5ZM11 4C10.4477 4 10 4.44772 10 5V8L14 8V5C14 4.44772 13.5523 4 13 4H11ZM12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13Z"/>
                </svg>
            </div>
        </div>` 

        selectedModules[1] = !el.selected ? "" : `
            <div style="width:100%; display:flex; flex-direction: column; height: 5%; justify-content: space-between; align-items: center; cursor: drag; position: relative">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="5rem" height="5rem" style="margin-top: -2.4rem; position: absolute" viewBox="0 0 700.000000 700.000000"
                    preserveAspectRatio="xMidYMid meet">
                
                <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
                fill="var(--sub-submain-color)" stroke="none">
                <path d="M149 3741 c-39 -40 -39 -82 0 -122 20 -20 39 -29 61 -29 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M689 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1229 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1769 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5049 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5589 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6129 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6669 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2329 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2869 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3409 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3949 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4489 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M419 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M959 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1499 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5319 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5859 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6399 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2059 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2599 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3139 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3679 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4219 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4759 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                </g>
                </svg>
           
            </div>
        `
        if (el.starred) {
            HTML.push(
            `
                        ${selectedModules[1]}
                        <div style="display:flex;width:100%;justify-content:space-between;align-items:center">
                            <svg fill="var(--accent-color)" height="1.1rem" width="1.1rem" style="margin-right:0.2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 473.486 473.486" xml:space="preserve">
                                <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                                237.732,386.042 384.416,460.829 357.032,298.473 "/>
                            </svg>
                            <h2
                                style="${el.selected && `color: var(--accent-color); letter-spacing: 0.1rem;`}"
                                class="-starred-title"
                            >${el.title}</h2>
                        </div>
                        <p
                            ${el.selected && `style="color: var(--submain-color); margin-left: -1rem"`}
                        >${el.body}</p>
                        <p class="-main-sidebar-note-card-time">${el.date}</p>
                        ${selectedModules[0]}
            `)
        } else { //if not starred
            HTML.push(`
                        ${selectedModules[1]}
                        <h2
                        ${el.selected && `style="color: var(--accent-color); letter-spacing: 0.1rem; margin-left: -1rem"`}
                        >${el.title}</h2>
                        <p
                            ${el.selected && `style="color: var(--submain-color); margin-left: -1rem"`}
                        >${el.body}</p>
                        <p class="-main-sidebar-note-card-time">${el.date}</p>
                        ${selectedModules[0]}
            `)
        }
    return HTML[0]
}

//style="background-color: ${el.selected && `var(--dark-main-color)`};}"
window.renderNotes = (select = false) => {
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