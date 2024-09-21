import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () =>
{

    const {hola, user} = useContext(UserContext);
    console.log(algo);

        return (
            <>
            <h1>LoginPage</h1>
            <hr/>
            </>
        )
}