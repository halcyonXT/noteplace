
import './public/styles/main.css'
import './public/modules/noteSelection'
import './public/modules/renderNotes'
import './public/modules/global'
import './public/modules/resizer'
import './public/modules/bodyProcessor'
/*
let body = 'Lorem ipsum dolor sit amet'

allNotes = [
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title4", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true},
    {title: "Title5", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title6", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title7", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true},
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title7", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false},
]
saveAllNotes()
*/


for (let i in allNotes) {
    bodyProcessor({value: allNotes[i].body}, i)
}
/*
document.querySelector('.-main-note-body-textarea').addEventListener('keydown', function(event) {
    if (event.key === "Tab" || event.keyCode === 9) {
        updateSelectedNote({value: `${}`})
    }
  });
*/


moveStarredToTop()
renderNotes()
renderSelectedNote()






