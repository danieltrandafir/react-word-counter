import Container from '@mui/material/Container';

import { Banner } from "./components/Banner"
import { WordCounter } from "./components/WordCounter"

export const App = () =>{
    return (
        <Container sx={{textAlign: "center",
                        display: "flex", flexDirection: "column", justifyContent: "center"}} >
            <Banner />
            <WordCounter />
        </Container>
    )
}