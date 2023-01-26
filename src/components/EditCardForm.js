import { useState } from "react"
import { editCard } from "../services/card_api";
import { useParams, useNavigate } from "react-router-dom"

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

export default function EditCardForm({frontDefaultValue, backDefaultValue, deckTitle , cardId}) {
    const [front, setFront] = useState(frontDefaultValue)
    const [back, setBack] = useState(backDefaultValue)

    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const card = {front, back }
        editCard(cardId, card)
        .then(() => nav(`/${deckTitle}`))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Stack direction="horizontal">
                    <span>To edit card make changes and click Edit</span>
                    <Button className="ms-auto material-symbols-outlined" variant="primary" type="submit">Edit Card</Button>
                </Stack>


                <Row style={{ margin: "8px 0px 0px 0px" }}>
                    <Col style={{ padding: "0px" }}>
                        <FloatingLabel label="Enter front">
                            <Form.Control
                                onChange={(e) => setFront(e.target.value)}
                                as="textarea"
                                placeholder="Enter front"
                                defaultValue={frontDefaultValue}
                                style={{ height: "7em" }} />
                        </FloatingLabel>
                    </Col>
                    <Col style={{ padding: "0px" }}>
                        <FloatingLabel label="Enter back">
                            <Form.Control
                                onChange={(e) => setBack(e.target.value)}
                                as="textarea"
                                placeholder="Enter back"
                                defaultValue={backDefaultValue}
                                style={{ height: "7em" }} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}