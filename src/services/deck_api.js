import axios from 'axios'
const baseURL = 'http://localhost:4000/api/decks'

// CREATE
export const createDeck = (deck) => {
    const URL = baseURL
    const response = axios.post(URL, deck)
    return response
}

// SHOW ALL
export const getDecks = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality to grab our Decks
    return response
}

// SHOW ONE
export const getDeckDeck = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the Deck
export const editDeck = (id, updatedDeck) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedDeck)
return response
}

// DELETE
export const deleteDeckDeck = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}