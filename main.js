import './styles/main.css'
import './modules/noteSelection'
import './modules/renderNotes'
import './modules/global'
import './modules/resizer'
import './modules/bodyProcessor'
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

moveStarredToTop()
renderNotes()
renderSelectedNote()




