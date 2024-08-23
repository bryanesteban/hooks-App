import { HomePage } from "./HomePage"


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr/>
            <Routes>
                <Route path="/" element={ <HomePage/>}/>
            </Routes>
        </>
    )
}