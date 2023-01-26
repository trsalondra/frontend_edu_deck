import EditCardForm from "../components/EditCardForm"
import { useParams } from "react-router-dom"
import { getCard } from "../services/card_api"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

export default function EditCard() {
    const { cardId, deckTitle} = useParams()

    const [card, setCard] = useState([])

    useEffect(() => {
        getCard(cardId)
        .then(res => setCard(res.data))
    }, [])
    
    return (
        <Container>
            <h1 style={{padding: " 0px 12px"}}>{deckTitle}</h1>
            <EditCardForm 
            cardId={card._id}
            deckTitle={deckTitle}
            frontDefaultValue={card.front} 
            backDefaultValue={card.back}/>            
        </Container>

    )
}