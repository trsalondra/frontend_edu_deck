import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack"
import { deleteCard } from "../services/card_api"
import { useNavigate } from "react-router-dom"

export default function CardDetails({ card }) {
    const nav = useNavigate()
    const handleDelete = () => {
        deleteCard(card._id) // delete function goes here
    }

    const handleEdit = () => {
        { nav(`/${card.deckTitle}/${card._id}`) }
    }

    return (
        <Card style={{ height: "7rem", margin: "12px", cursor: "pointer" }}>
            <Card.Body style={{ display: "flex", justifyContent: "center" , alignItems: "center" }}>
                <Card.Title style={{ flex: "1" }} text="light" >{card.front}</Card.Title>
                <Card.Title style={{ flex: "1" }} text="light" >{card.back}</Card.Title>
                <span className="material-symbols-outlined google-icons" onClick={handleDelete}>Delete</span>
                <span className="material-symbols-outlined google-icons" onClick={handleEdit}>edit</span>
            </Card.Body>
        </Card>
    )
}