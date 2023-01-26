import Container from "react-bootstrap/Container"
import CreateCardForm from "../components/CreateCardForm"
import CardDetails from "../components/CardDetail"
import { getDeck } from "../services/card_api"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Deck() {
    const { deckTitle } = useParams() // destructuring the id parameter for use

    const [cards, setCards] = useState([])

    useEffect(() => {
        getDeck(deckTitle)
            .then(res => setCards(res.data))
    }, [])

    return (
        <Container>
            <h1 style={{padding: " 0px 12px"}}>{deckTitle}</h1>
            <CreateCardForm deckTitle={deckTitle}/>

            <hr />
            
            {cards && cards.map((card) => (
                <CardDetails key={card._id} card={card} />
            ))}
        </Container>
    )
}