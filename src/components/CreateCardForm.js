import { useState } from "react"
import { createCard } from "../services/card_api"

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

export default function CreateCardForm({ deckTitle }) {

    const [front, setFront] = useState("")
    const [back, setBack] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const card = { deckTitle, front, back }

        createCard(card)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Stack direction="horizontal">
                    <span>Add cards to the {`${deckTitle}`} deck</span>
                    <Button className="ms-auto material-symbols-outlined"
                        variant="primary"
                        type="submit"> Add Card</Button>
                </Stack>

                <Row style={{ margin: "8px 0px 0px 0px" }}>
                    <Col style={{ padding: "0px" }}>
                        <FloatingLabel label="Enter front">
                            <Form.Control onChange={(e) => setFront(e.target.value)}
                                as="textarea"
                                placeholder="Enter front"
                                style={{ height: "7em" }} />
                        </FloatingLabel>
                    </Col>
                    <Col style={{ padding: "0px" }}>
                        <FloatingLabel label="Enter back">
                            <Form.Control
                                onChange={(e) => setBack(e.target.value)}
                                as="textarea"
                                placeholder="Enter back"
                                style={{ height: "7em" }} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}