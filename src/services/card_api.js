// All of our endpoints
import axios from "axios"
const baseURL = "https://edu-deck-api.onrender.com/api/cards"


// CREATE CARD
export const createCard = (card) => {
    const URL = baseURL
    try {
        const response = axios.post(URL, card)
        return response
    } catch (error) {
        console.log(error)
    }
}

// SHOW ALL CARDS
export const getCards = () => {
    const URL = baseURL // our base url

    try {
        const response = axios.get(URL) // using axios"s get functionality to grab our Decks
        return response
    } catch (error) {
        console.log(error)
    }
}

// GET CARD COUNT PER DECK
export const getDeckCount = (deckTitle) => {
    const URL = `${baseURL}/count/${deckTitle}`

    try {
        const response = axios.get(URL)
        return response
    } catch (error) {
        console.log(error)
    }
}

// GET ALL CARDS FROM A SPECIFIC DECK
export const getDeck = (deckTitle) => {
    const URL = `${baseURL}/deck/${deckTitle}`
    try {
        const response = axios.get(URL)
        return response
    } catch (error) {
        console.log(error)
    }
}

// DELETE ALL CARDS FROM A SPECIFIC DECK
export const deleteDeck = (deckTitle) => {
    const URL = `${baseURL}/deletedeck/${deckTitle}`
    try {
        const response = axios.delete(URL)
        return response
    } catch (error) {
        console.log(error)
    }
}

// SHOW CARD
export const getCard = (id) => {
    const URL = `${baseURL}/${id}`
    try {
        const response = axios.get(URL)
        return response
    } catch (error) {
        console.log(error)
    }
}

// EDIT CARD
export const editCard = (id, data) => {
    const URL = `${baseURL}/${id}`
    try {
        const response = axios.put(URL, data)
        return response
    } catch (error) {
        console.log(error)
    }
}

// DELETE CARD
export const deleteCard = (id) => {
    const URL = `${baseURL}/${id}`

    try {
        const response = axios.delete(URL)
        return response
    } catch (error) {
        console.log(error)
    }
}
