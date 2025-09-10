// app/calendar/page.tsx
'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

export default function CalendarPage() {
  // tasks -> events (exemplo)
  const events = useMemo(() => ([
    { id: '1', title: 'Estudar React', start: '2025-09-10' },
    { id: '2', title: 'Refatorar To-Do', start: '2025-09-11', end: '2025-09-12' }
  ]), [])

  return (
    <div style={{ padding: 16 }}>
      <h1>Tasks Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale='pt-br'
        events={events}
        dateClick={(info) => {
          // abrir modal/criar task com dueDate = info.dateStr
          console.log('dia clicado:', info.dateStr)
        }}
        eventClick={(info) => {
          // abrir detalhes/editar task
          console.log('task:', info.event.id)
        }}
        editable
        selectable
      />
    </div>
  )
}
