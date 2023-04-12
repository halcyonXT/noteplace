
window.renderSelectedNote = () => {
    let selected = allNotes.findIndex(el => el.selected)
    let display = document.querySelector('.-main-note')
    let mainDisplay
    try {
        mainDisplay = 
            editMode 
            ?
            `
            <textarea
            oninput="updateSelectedNote(this, '${allNotes[selected].id}', 'body')"
            value="${allNotes[selected].body}"
            spellcheck="false"
            class="-main-note-body-textarea">${allNotes[selected].body}
            </textarea>
            `
            :
            `<div class='-main-note-preview'>
                ${allNotes[selected].bodyPreview}        
            </div>`
    } catch (ex) {}

    if (selected === -1) {
        display.innerHTML = ``
        return
    } else {//◣
        display.innerHTML = `
            <div style="display:flex; width: 100%; align-items:center;">
                <div class="-main-note-title">
                    <input 
                        oninput="updateSelectedNote(this, '${allNotes[selected].id}', 'title')"
                        value="${allNotes[selected].title}"
                        spellcheck="false"
                        placeholder="Note title"
                    ></input>
                </div>
                <div style="width:10%; height: 80%; border-radius: 0.3rem; display: flex; align-items: center; justify-content: flex-end">
                    <svg onclick="toggleEditMode()" style="user-select: none; cursor: pointer;"
                    fill="var(${editMode ? "--accent-color" : "--submain-color"})" width="2.2rem" height="2.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"/></svg>
                </div>
            </div>
            <hr class="customhr">
            <div class="-toolbar -toolbar2">
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Puts boldening ** tags around selected text')}
                    <svg viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.531v1.344c1.063-0.031 1.938-0.063 2.563-0.094 0.625 0 1.094-0.031 1.313-0.031 1.656-0.125 3.063-0.219 4.281-0.188l2.813 0.063c2.438 0 4.25-0.313 5.75-1 0.719-0.344 1.344-0.844 1.969-1.531 0.469-0.469 0.813-1.031 1.031-1.656 0.25-0.844 0.375-1.594 0.375-2.281 0-2.5-1.719-4.625-5.094-5.406 0.531-0.25 1.031-0.5 1.375-0.688s0.625-0.313 0.781-0.438c1.188-0.875 1.781-1.906 1.781-3.281 0-0.594-0.094-1.188-0.281-1.719-0.375-1.094-1.219-2-2.406-2.563-0.531-0.313-1.031-0.469-1.375-0.531-0.938-0.25-1.844-0.375-2.719-0.375h-1.094c-0.219 0-0.406 0-0.531-0.031h-0.5c-0.063 0-0.156 0-0.25 0.031h-0.625l-5.406 0.156-3.719 0.094 0.063 1.188c0.875 0.125 1.406 0.188 1.625 0.188 0.438 0 0.781 0.094 0.969 0.219 0.094 0 0.156 0.063 0.188 0.125 0.063 0.219 0.125 0.688 0.156 1.563 0.063 1.563 0.063 2.813 0.063 3.75 0.031 0.969 0.031 1.625 0.094 2v7.031c0 1.219-0.031 2.125-0.156 2.75-0.031 0.219-0.125 0.438-0.281 0.688-0.438 0.188-1 0.375-1.75 0.469-0.375 0.063-0.719 0.125-1 0.156zM7.719 14.281v-2.469c0.063-1.719 0-2.969-0.031-3.969-0.063-0.438-0.063-0.844-0.063-1.063 0.75-0.156 1.344-0.219 1.844-0.219 1.625 0 2.844 0.344 3.656 1.094 0.813 0.688 1.219 1.563 1.219 2.656 0 2.969-1.75 4.094-5.063 4.094-0.563 0-1.094-0.031-1.563-0.125zM7.719 20.406v-4.5c0.313-0.063 0.75-0.125 1.438-0.125 1.594-0.031 2.813 0.125 3.563 0.438 1.531 0.563 2.594 2.188 2.594 4.344 0 1.031-0.219 1.844-0.563 2.563-0.375 0.719-0.906 1.219-1.719 1.594-1.656 0.781-3.719 0.719-5.125 0.125-0.094-0.25-0.125-0.438-0.125-0.594z"></path>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Puts italic ^^ tags around selected text')}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path d="M22.066,44.07c0,0.661,0.149,1.168,0.446,1.521c0.299,0.353,0.767,0.602,1.405,0.744c0.64,0.144,1.543,0.237,2.712,0.281   l-0.265,1.355c-2.116-0.133-4.982-0.199-8.597-0.199c-3.77,0-6.646,0.066-8.63,0.199l0.363-1.355   c1.587-0.066,2.778-0.243,3.572-0.529c0.793-0.287,1.427-0.82,1.901-1.604c0.474-0.782,0.931-2.012,1.372-3.687l8.928-33.594   c0.375-1.433,0.562-2.513,0.562-3.24c0-0.684-0.153-1.201-0.463-1.554c-0.309-0.353-0.776-0.601-1.405-0.744   c-0.628-0.144-1.526-0.237-2.694-0.281l0.331-1.355c1.851,0.132,4.717,0.198,8.596,0.198c3.638,0,6.525-0.066,8.663-0.198   l-0.33,1.355c-1.653,0.066-2.883,0.242-3.687,0.529C34.04,2.199,33.401,2.729,32.928,3.5s-0.931,2.006-1.372,3.703l-8.928,33.594   C22.254,42.252,22.066,43.343,22.066,44.07z"/>
                        </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Puts underline __ tags around selected text')}
                    <svg width="1.1rem" height="1.1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 29.501 29.501"
                            xml:space="preserve">
                    <g>
                        <path d="M27.408,0.001v0.67H26.9c-0.689,0-1.265,0.141-1.724,0.418c-0.459,0.277-0.793,0.695-0.997,1.252
                            c-0.156,0.387-0.236,1.082-0.236,2.084v9.34c0,2.892-0.189,4.978-0.57,6.256c-0.381,1.281-1.309,2.459-2.783,3.535
                            c-1.477,1.076-3.486,1.615-6.039,1.615c-2.127,0-3.771-0.285-4.934-0.854c-1.583-0.773-2.701-1.765-3.354-2.974
                            c-0.653-1.211-0.979-2.836-0.979-4.879V4.424c0-1.414-0.077-2.293-0.235-2.639C4.893,1.44,4.619,1.166,4.233,0.961
                            C3.849,0.756,3.132,0.658,2.093,0.67V0h12.693v0.67h-0.635c-0.955,0-1.609,0.1-1.968,0.301c-0.356,0.199-0.61,0.476-0.763,0.824
                            c-0.149,0.352-0.227,1.227-0.227,2.629v12.043c0,2.199,0.166,3.656,0.499,4.371c0.332,0.713,0.88,1.305,1.642,1.775
                            c0.762,0.473,1.724,0.709,2.883,0.709c1.33,0,2.466-0.303,3.4-0.898c0.938-0.598,1.639-1.424,2.104-2.475
                            c0.467-1.055,0.698-2.887,0.698-5.497V4.424c0-1.1-0.114-1.885-0.346-2.356c-0.229-0.472-0.521-0.798-0.869-0.979
                            c-0.545-0.277-1.312-0.418-2.304-0.418v-0.67H27.408L27.408,0.001z M4.25,29.501h21v-1.828h-21V29.501z"/>
                    </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Puts strikethrough -- tags around selected text')}
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"/>
                    </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"/>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Change font of selected text')}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h16v4h-2V2H9v12h3v2H4v-2h3V2H2v2H0V2z" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Change font color of selected text')}
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M44.55 10.526C18.234 10.526 0 31.58 0 42.106s5.263 18.42 15.79 18.42c10.526 0 15.789 2.632 15.789 10.527c0 10.526 7.895 18.42 18.421 18.42c34.21 0 50-18.42 50-36.841c0-31.58-23.87-42.106-55.45-42.106zm-7.024 10.527a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm21.053 0a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm19.053 10.526a6.579 6.579 0 1 1 0 13.158a6.579 6.579 0 0 1 0-13.158zm-58.527 1.263a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zM54 63.158a7.895 7.895 0 0 1 7.895 7.895c0 4.36-5.535 7.894-9.895 7.894a7.895 7.895 0 0 1-7.895-7.894c0-4.36 5.535-7.895 9.895-7.895z"></path></svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox('Change font size of selected text')}
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.78233 2.21707C2.70732 2.14206 2.60557 2.09991 2.49949 2.09991C2.3934 2.09991 2.29166 2.14206 2.21664 2.21707L0.216645 4.21707C0.0604351 4.37328 0.0604351 4.62655 0.216645 4.78276C0.372855 4.93897 0.626121 4.93897 0.78233 4.78276L2.09949 3.4656L2.09949 11.5342L0.78233 10.2171C0.62612 10.0609 0.372854 10.0609 0.216645 10.2171C0.0604349 10.3733 0.0604349 10.6265 0.216645 10.7828L2.21664 12.7828C2.29166 12.8578 2.3934 12.8999 2.49949 12.8999C2.60557 12.8999 2.70731 12.8578 2.78233 12.7828L4.78233 10.7828C4.93854 10.6265 4.93854 10.3733 4.78233 10.2171C4.62612 10.0609 4.37285 10.0609 4.21664 10.2171L2.89949 11.5342L2.89949 3.4656L4.21664 4.78276C4.37285 4.93897 4.62612 4.93897 4.78233 4.78276C4.93854 4.62655 4.93854 4.37328 4.78233 4.21707L2.78233 2.21707ZM10.5 2.74997C10.7107 2.74997 10.8988 2.88211 10.9703 3.08036L13.9703 11.3999C14.064 11.6597 13.9293 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.95228L7.97033 11.7392C7.87666 11.9989 7.59013 12.1336 7.33036 12.0399C7.07059 11.9462 6.93595 11.6597 7.02962 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25879L10.5 4.72396Z"
                        />
                    </svg>
                </div>
            </div>
            </div>
            <div class='-main-note-body'>
                ${mainDisplay}
            </div>
        `
        selectedNoteId = allNotes[selected].id
    }
}
