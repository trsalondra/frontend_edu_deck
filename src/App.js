import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {Button} from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

// pages & components
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import DeckForm from './components/DeckForm'
import Deck from './pages/Deck'
import EditCard from './pages/EditCard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Dashboard />} />
            <Route
              path='/create'
              element={<DeckForm />} />
            <Route
              path='/:deckTitle'
              element={<Deck/>} />
            <Route
              path='/:deckTitle/:cardId'
              element={<EditCard/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
