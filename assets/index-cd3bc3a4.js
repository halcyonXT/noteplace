(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();window.renderSelectedNote=()=>{let e=allNotes.findIndex(n=>n.selected),t=document.querySelector(".-main-note"),l;try{l=editMode?`
            <textarea
            oninput="updateSelectedNote(this, '${allNotes[e].id}', 'body')"
            value="${allNotes[e].body}"
            spellcheck="false"
            class="-main-note-body-textarea">${allNotes[e].body}
            </textarea>
            `:`<div class='-main-note-preview'>
                ${allNotes[e].bodyPreview}        
            </div>`}catch{}if(e===-1){t.innerHTML="";return}else t.innerHTML=`
            <div style="display:flex; width: 100%; align-items:center;">
                <div class="-main-note-title">
                    <input 
                        oninput="updateSelectedNote(this, '${allNotes[e].id}', 'title')"
                        value="${allNotes[e].title}"
                        spellcheck="false"
                        placeholder="Note title"
                    ></input>
                </div>
                <div style="width:10%; height: 80%; border-radius: 0.3rem; display: flex; align-items: center; justify-content: flex-end">
                    <svg onclick="toggleEditMode()" style="user-select: none; cursor: pointer;"
                    fill="var(${editMode?"--accent-color":"--submain-color"})" width="2.2rem" height="2.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"/></svg>
                </div>
            </div>
            <hr class="customhr">
            <div class="-toolbar -toolbar2">
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Puts boldening ** tags around selected text")}
                    <svg viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.531v1.344c1.063-0.031 1.938-0.063 2.563-0.094 0.625 0 1.094-0.031 1.313-0.031 1.656-0.125 3.063-0.219 4.281-0.188l2.813 0.063c2.438 0 4.25-0.313 5.75-1 0.719-0.344 1.344-0.844 1.969-1.531 0.469-0.469 0.813-1.031 1.031-1.656 0.25-0.844 0.375-1.594 0.375-2.281 0-2.5-1.719-4.625-5.094-5.406 0.531-0.25 1.031-0.5 1.375-0.688s0.625-0.313 0.781-0.438c1.188-0.875 1.781-1.906 1.781-3.281 0-0.594-0.094-1.188-0.281-1.719-0.375-1.094-1.219-2-2.406-2.563-0.531-0.313-1.031-0.469-1.375-0.531-0.938-0.25-1.844-0.375-2.719-0.375h-1.094c-0.219 0-0.406 0-0.531-0.031h-0.5c-0.063 0-0.156 0-0.25 0.031h-0.625l-5.406 0.156-3.719 0.094 0.063 1.188c0.875 0.125 1.406 0.188 1.625 0.188 0.438 0 0.781 0.094 0.969 0.219 0.094 0 0.156 0.063 0.188 0.125 0.063 0.219 0.125 0.688 0.156 1.563 0.063 1.563 0.063 2.813 0.063 3.75 0.031 0.969 0.031 1.625 0.094 2v7.031c0 1.219-0.031 2.125-0.156 2.75-0.031 0.219-0.125 0.438-0.281 0.688-0.438 0.188-1 0.375-1.75 0.469-0.375 0.063-0.719 0.125-1 0.156zM7.719 14.281v-2.469c0.063-1.719 0-2.969-0.031-3.969-0.063-0.438-0.063-0.844-0.063-1.063 0.75-0.156 1.344-0.219 1.844-0.219 1.625 0 2.844 0.344 3.656 1.094 0.813 0.688 1.219 1.563 1.219 2.656 0 2.969-1.75 4.094-5.063 4.094-0.563 0-1.094-0.031-1.563-0.125zM7.719 20.406v-4.5c0.313-0.063 0.75-0.125 1.438-0.125 1.594-0.031 2.813 0.125 3.563 0.438 1.531 0.563 2.594 2.188 2.594 4.344 0 1.031-0.219 1.844-0.563 2.563-0.375 0.719-0.906 1.219-1.719 1.594-1.656 0.781-3.719 0.719-5.125 0.125-0.094-0.25-0.125-0.438-0.125-0.594z"></path>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Puts italic ^^ tags around selected text")}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path d="M22.066,44.07c0,0.661,0.149,1.168,0.446,1.521c0.299,0.353,0.767,0.602,1.405,0.744c0.64,0.144,1.543,0.237,2.712,0.281   l-0.265,1.355c-2.116-0.133-4.982-0.199-8.597-0.199c-3.77,0-6.646,0.066-8.63,0.199l0.363-1.355   c1.587-0.066,2.778-0.243,3.572-0.529c0.793-0.287,1.427-0.82,1.901-1.604c0.474-0.782,0.931-2.012,1.372-3.687l8.928-33.594   c0.375-1.433,0.562-2.513,0.562-3.24c0-0.684-0.153-1.201-0.463-1.554c-0.309-0.353-0.776-0.601-1.405-0.744   c-0.628-0.144-1.526-0.237-2.694-0.281l0.331-1.355c1.851,0.132,4.717,0.198,8.596,0.198c3.638,0,6.525-0.066,8.663-0.198   l-0.33,1.355c-1.653,0.066-2.883,0.242-3.687,0.529C34.04,2.199,33.401,2.729,32.928,3.5s-0.931,2.006-1.372,3.703l-8.928,33.594   C22.254,42.252,22.066,43.343,22.066,44.07z"/>
                        </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Puts underline __ tags around selected text")}
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
                    ${getInfobox("Puts strikethrough -- tags around selected text")}
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
                    ${getInfobox("Change font of selected text")}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h16v4h-2V2H9v12h3v2H4v-2h3V2H2v2H0V2z" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Change font color of selected text")}
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M44.55 10.526C18.234 10.526 0 31.58 0 42.106s5.263 18.42 15.79 18.42c10.526 0 15.789 2.632 15.789 10.527c0 10.526 7.895 18.42 18.421 18.42c34.21 0 50-18.42 50-36.841c0-31.58-23.87-42.106-55.45-42.106zm-7.024 10.527a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm21.053 0a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm19.053 10.526a6.579 6.579 0 1 1 0 13.158a6.579 6.579 0 0 1 0-13.158zm-58.527 1.263a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zM54 63.158a7.895 7.895 0 0 1 7.895 7.895c0 4.36-5.535 7.894-9.895 7.894a7.895 7.895 0 0 1-7.895-7.894c0-4.36 5.535-7.895 9.895-7.895z"></path></svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Change font size of selected text")}
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
                ${l}
            </div>
        `,selectedNoteId=allNotes[e].id};window.getNoteElement=e=>{let t=[],l=[];return l[0]=e.selected?`<div class="-main-sidebar-note-buttons">
            <div class="-main-sidebar-note-buttons-button -button-animation" 
                onclick="deleteNote('${e.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation"
                onclick="toggleStarred('${e.id}')">
                <svg height="1.1rem" width="1.1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 473.486 473.486" xml:space="preserve" ${e.starred&&'fill="var(--accent-color)"'}>
                    <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                    237.732,386.042 384.416,460.829 357.032,298.473 "/>
                </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation">
                <svg width="1.1rem" height="1.1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 5V8.00415C7.50208 8.01124 7.05704 8.03041 6.67222 8.08214C6.0167 8.17028 5.38835 8.36902 4.87869 8.87868C4.36902 9.38835 4.17028 10.0167 4.08215 10.6722C3.99991 11.2839 3.99995 12.0477 4 12.9342V17.0658C3.99995 17.9523 3.99991 18.7161 4.08215 19.3278C4.17028 19.9833 4.36902 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28387 22.0001 8.0477 22.0001 8.93417 22H15.0659C15.9523 22.0001 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0658V12.9342C20.0001 12.0477 20.0001 11.2839 19.9179 10.6722C19.8297 10.0167 19.631 9.38835 19.1213 8.87868C18.6117 8.36902 17.9833 8.17028 17.3278 8.08215C16.943 8.03041 16.4979 8.01124 16 8.00415V5C16 3.34315 14.6569 2 13 2H11C9.34316 2 8.00001 3.34315 8.00001 5ZM11 4C10.4477 4 10 4.44772 10 5V8L14 8V5C14 4.44772 13.5523 4 13 4H11ZM12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13Z"/>
                </svg>
            </div>
        </div>`:"",l[1]=e.selected?`
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
        `:"",e.starred?t.push(`
                        ${l[1]}
                        <div style="display:flex;width:100%;justify-content:space-between;align-items:center">
                            <svg fill="var(--accent-color)" height="1.1rem" width="1.1rem" style="margin-right:0.2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 473.486 473.486" xml:space="preserve">
                                <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                                237.732,386.042 384.416,460.829 357.032,298.473 "/>
                            </svg>
                            <h2
                                style="${e.selected&&"color: var(--accent-color); letter-spacing: 0.1rem;"}"
                                class="-starred-title"
                            >${e.title}</h2>
                        </div>
                        <p
                            ${e.selected&&'style="color: var(--submain-color); margin-left: -1rem"'}
                        >${e.body}</p>
                        <p class="-main-sidebar-note-card-time">${e.date}</p>
                        ${l[0]}
            `):t.push(`
                        ${l[1]}
                        <h2
                        ${e.selected&&'style="color: var(--accent-color); letter-spacing: 0.1rem; margin-left: -1rem"'}
                        >${e.title}</h2>
                        <p
                            ${e.selected&&'style="color: var(--submain-color); margin-left: -1rem"'}
                        >${e.body}</p>
                        <p class="-main-sidebar-note-card-time">${e.date}</p>
                        ${l[0]}
            `),t[0]};window.renderNotes=(e=!1)=>{let t=document.querySelector(".-main-sidebar-notes");t.innerHTML="";let l=[];for(let n of allNotes)n.starred?l.push(`
                <div 
                    class="
                        -main-sidebar-note-card 
                        ${n.selected&&e&&"cardSelectAnimation"} 
                        ${n.id===lastSelectedNoteId&&e&&"cardDeselectAnimation"}
                        ${n.selected&&!e&&"card-selected"}
                    "
                    data-noteid="${n.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(n)}
                </div>
            `):l.push(`
                <div class="
                        -main-sidebar-note-card 
                        ${n.selected&&e&&"cardSelectAnimation"} 
                        ${n.selected&&!e&&"card-selected"}
                        ${n.id===lastSelectedNoteId&&e&&"cardDeselectAnimation"}
                    "
                    data-noteid="${n.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(n)}
                </div>
            `);for(let n of l)t.innerHTML+=n};window.idGenerator=()=>Math.trunc(Math.random()*1e14).toString(32);window.getCurrentDate=()=>{const e=new Date,t=e.getDate().toString().padStart(2,"0"),l=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear().toString(),o=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return`${o}:${s} ${t}/${l}/${n}`};window.mouseEnterStyles=e=>{if(e.dataset.noteid===selectedNoteId)return;let t=document.querySelector(`[data-noteid="${e.dataset.noteid}"] h2`),l=document.querySelector(`[data-noteid="${e.dataset.noteid}"] p`);t.style.color="var(--accent-color)",t.style.letterSpacing="1px",l.style.color="var(--accent-color)"};window.mouseLeaveStyles=e=>{if(e.dataset.noteid===selectedNoteId)return;let t=document.querySelector(`[data-noteid="${e.dataset.noteid}"] h2`),l=document.querySelector(`[data-noteid="${e.dataset.noteid}"] p`);t.style.color="var(--submain-color)",t.style.letterSpacing="0px",l.style.color="var(--sub-submain-color)"};window.sampleNote=e=>({title:"New title",body:"Beginning of a new note",bodyPreview:"Beggining of a new note",id:e,selected:!1,date:getCurrentDate(),starred:!1});window.allNotes=JSON.parse(localStorage.getItem("allNotes"))||[{title:"Welcome",body:"Welcome to Noteplace. Start by creating a note",id:idGenerator()}];window.selectedNoteId="";window.lastSelectedNoteId="";window.editMode=!1;let d=!1;window.getInfobox=e=>`<div class="-infobox-wrapper">
        ⏶
        <div class="-infobox">
            ${e}
        </div>
    </div>`;window.moveStarredToTop=()=>{let e=[],t=[];for(let l in allNotes)allNotes[l].starred?e.push(allNotes[l]):t.push(allNotes[l]);allNotes=[...e,...t]};window.reRenderNote=e=>{let t=document.querySelector(".-main-sidebar-notes"),l=getNoteElement(allNotes[e]);t.children[e].innerHTML=l};window.saveAllNotes=()=>{localStorage.setItem("allNotes",JSON.stringify(allNotes))};window.deleteNote=async e=>{await document.querySelectorAll(`[data-noteid='${e}']`)[0].animate([{transform:"translateX(0)",opacity:"1"},{transform:"translateX(-3vw)",opacity:"0"}],{duration:200,iterations:1,easing:"ease-in-out"}).finished,selectedNoteId="",lastSelectedNoteId="",allNotes.splice(allNotes.findIndex(l=>l.id==e),1),renderNotes(),renderSelectedNote(),saveAllNotes()};window.deleteNotes=(e=null)=>{debugger;if(e){for(let t of e)selectedNoteId==t&&(selectedNoteId="",lastSelectedNoteId=""),allNotes.splice(allNotes.findIndex(l=>l.id==t),1);renderNotes(),renderSelectedNote()}};window.updateSelectedNote=(e,t,l)=>{let n=allNotes.findIndex(s=>s.id===t),o=e.value.replaceAll("<","<​");allNotes[n][l]=`${o}`,l=="body"&&bodyProcessor(e,n),reRenderNote(n),saveAllNotes()};window.flushSelected=()=>{for(let e of allNotes)e.selected=!1};window.selectNote=e=>{if(selectedNoteId!==e.dataset.noteid){lastSelectedNoteId=selectedNoteId;for(let t of allNotes)t.id!==e.dataset.noteid?t.selected=!1:t.selected=!0;renderNotes(!0),renderSelectedNote()}};window.selectNoteWithID=e=>{lastSelectedNoteId=selectedNoteId,flushSelected(),allNotes[allNotes.findIndex(t=>t.id==e)].selected=!0,renderNotes(!0),renderSelectedNote()};window.createNewNote=()=>{const e=idGenerator();let t=0;for(let o in allNotes)if(!allNotes[o].starred){t=o;break}let l=allNotes.slice(0,t);allNotes.splice(0,t);let n=allNotes;allNotes.unshift(sampleNote(e)),allNotes=[...l,...n],selectNoteWithID(e),saveAllNotes()};window.toggleStarred=e=>{const t=allNotes.findIndex(l=>l.id==e);allNotes[t].starred=!allNotes[t].starred,moveStarredToTop(),renderNotes(),renderSelectedNote(),saveAllNotes()};window.toggleEditMode=()=>{editMode=!editMode,renderSelectedNote()};let c;window.toggleInfobox=(e,t)=>{t==="enter"?(d=!0,c=setTimeout(()=>{d&&(e.querySelector(".-infobox-wrapper").style.display="block")},500)):(d=!1,clearTimeout(c),e.querySelector(".-infobox-wrapper").style.display="none")};let v=0,u=document.querySelector(".-main-sidebar"),m=document.querySelector(".-main-note"),g,h;document.querySelector(".-resizer-notch").addEventListener("mousedown",function(e){v=e.clientX,h=m.clientWidth,g=u.clientWidth,window.addEventListener("mousemove",p),window.addEventListener("mouseup",w)});const p=e=>{const t=v-e.clientX;u.style.width=`${g-t}px`,m.style.width=`${h+t}px`},w=e=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",w)};window.bodyProcessor=(e,t)=>{function l(s){const a=new RegExp("(⎊.{6})","g");let r=1;return s.replace(a,i=>(r++,r%2===0?`<span style="color:#${i.slice(1)}">`:i))}function n(s,a,r){let i=0;return s.replace(new RegExp(a,"g"),f=>(i++,i%2===0?r:f))}let o=e.value;(function(){o=o.replaceAll("<","<​"),o=o.replaceAll(`
`,"<br>")})(),o=n(o,"\\*\\*","</b>"),o=o.replaceAll("**","<b>"),o=n(o,"\\^\\^","</i>"),o=o.replaceAll("^^","<i>"),o=n(o,"\\_\\_","</u>"),o=o.replaceAll("__","<u>"),o=n(o,"\\-\\-","</s>"),o=o.replaceAll("--","<s>"),o=l(o),o=o.replaceAll("⎊","</span>"),allNotes[t].bodyPreview=o};for(let e in allNotes)bodyProcessor({value:allNotes[e].body},e);moveStarredToTop();renderNotes();renderSelectedNote();
