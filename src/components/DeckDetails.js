
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import Card from "react-bootstrap/Card"

import { getDeckCount } from "../services/card_api"


export default function DeckDetails({ deck }) {
    const nav = useNavigate()

    const [count, setCount] = useState("0")

    useEffect(() => {
        getDeckCount(deck.title) // calling the function to get the data
            .then(res => setCount(res.data)) // setting state with returned data
    }, [])

    return (
        <Card onClick={() => { nav(`/${deck.title}`) }} style={{ height: "7rem", margin: "12px", cursor: "pointer" }}>
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="me-auto">
                    <Card.Title  text="light" >{deck.title}</Card.Title>
                    <Card.Subtitle>{deck.description}</Card.Subtitle>
                    <Card.Text>{count} Cards</Card.Text>                        
                    </div>
            </Card.Body>
        </Card>
    )
}