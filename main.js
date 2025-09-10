import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBr from '@fullcalendar/core/locales/pt-br'

// estilos do FullCalendar
import '@fullcalendar/daygrid'

// tasks -> events (exemplo)
const events = [
  { id: '1', title: 'Estudar React', start: '2025-09-10' },
  { id: '2', title: 'Refatorar To-Do', start: '2025-09-11', end: '2025-09-12' }
]

// cria container
const container = document.querySelector('.body')
// container.style.padding = '16px'

// título
// const h1 = document.createElement('h1')
// h1.textContent = 'Tasks Calendar'
// container.appendChild(h1)

// div para o calendário
const calendarEl = document.createElement('div')
container.appendChild(calendarEl)

// adiciona tudo ao body
// document.body.appendChild(container)

// inicializa FullCalendar
const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: ptBr,
  events,
  dateClick(info) {
    console.log('dia clicado:', info.dateStr)
    alert(`clicou no dia: ${info.dateStr}`)
  },
  eventClick(info) {
    console.log('task:', info.event.id, info.event.title)
    alert(`task: ${info.event.title}`)
  },
  editable: true,
  selectable: true
})

calendar.render()
