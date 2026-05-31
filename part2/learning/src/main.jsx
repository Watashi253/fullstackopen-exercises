import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import './index.css' 

axios
  .get('/api/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App notes={notes}/>
  </StrictMode>,
)
