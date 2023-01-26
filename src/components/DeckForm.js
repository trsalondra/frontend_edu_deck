import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDeck } from "../services/deck_api"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import FloatingLabel from "react-bootstrap/FloatingLabel"


export default function DeckForm() {
    const nav = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const deck = { title, description }
        createDeck(deck)
            .then(() => nav(`/${deck.title}`))
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Stack direction="horizontal">
                    <span style={{ margin: "8px 0px" }} className="bg-white">Create new study deck</span>
                </Stack>

                <Form.Group>
                    <FloatingLabel label="Enter title">
                        <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </FloatingLabel>

                    <FloatingLabel label="Enter description">
                        <Form.Control type="text" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </FloatingLabel>
                </Form.Group>
                <Button style={{ margin: "8px 0px 0px 0px" }} variant="primary" type="submit">Add Deck</Button>
            </Form>

            <hr />

        </Container>
    )
}
