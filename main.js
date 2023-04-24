
import './public/styles/main.css'
import './public/modules/noteSelection'
import './public/modules/rendering/getNoteElement'
import './public/modules/rendering/renderNotes'
import './public/modules/global'
import './public/modules/resizer'
import './public/modules/bodyProcessor'
/*
let body = 'Lorem ipsum dolor sit amet'

allNotes = [
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true, alarm: {set: false, time: 0}},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title4", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true, alarm: {set: false, time: 0}},
    {title: "Title5", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title6", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title7", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: true, alarm: {set: false, time: 0}},
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title7", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title1", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title2", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
    {title: "Title3", body: "Lorem ipsum dolor sit amet", bodyPreview: body, id: idGenerator(), selected: false, date: getCurrentDate(), starred: false, alarm: {set: false, time: 0}},
]
saveAllNotes()
/*


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

for(let i of allNotes) {
    i.alarm = {set: false, time: 0}
}


moveStarredToTop()
renderNotes()
renderSelectedNote()






