import { useContext } from "react"
import { CardsContext } from "../context/CardsContext"


export const  useCardsContext= () => {
    const context = useContext(CardsContext)

    if (!context) {
        throw Error("useCardsContext must be used inside an CardsContextProvider")
    }
    return context
}