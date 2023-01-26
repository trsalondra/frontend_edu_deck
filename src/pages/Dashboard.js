import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { getDecks } from '../services/deck_api'
import { useState, useEffect } from 'react'

// components
import DeckDetails from '../components/DeckDetails'

export default function Dashboard() {

    const [decks, setDecks] = useState([])

    useEffect(() => {
        getDecks() 
        .then(res => setDecks(res.data))
    }, [])
    console.log(decks)

    return (
            <Container>
                {decks && decks.map((deck) => (
                    <DeckDetails key={deck._id} deck={deck}/>
                ))}              
            </Container>
    )
}