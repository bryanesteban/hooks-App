import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () =>
    {

        const {} =useContext( UserContext);


        return (
            <>
            <h1>HomeApp</h1>
            <hr/>
            </>
        )
    }