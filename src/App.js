import Container from '@mui/material/Container';

import { Banner } from "./components/Banner"
import { WordCounter } from "./components/WordCounter"

export const App = () =>{
    return (
        <Container sx={{textAlign: "center",
                        display: "flex", flexDirection: "column", justifyContent: "center"}} >
            <Banner title="Word Counter" subtitle="Paste or type your text in the box below"/>
            <WordCounter />
        </Container>
    )
}