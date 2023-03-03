import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { useState } from "react";


export const WordCounter = () =>{
    const [countWord, setCountWord] = useState(0)

    const updateWordCount = (prop) => {
        const textContent = prop.target.value
        const textArray = textContent.split(' ')
        
        setCountWord(textArray.length)
        
    }
    
    return (
        <Box sx={{height: "70vh", backgroundColor:"#BFDCE5", paddingTop: "10%"}}>
            <div>
                <textarea
                onChange={updateWordCount}>
                </textarea>
            </div>
            <div>
                <h3>Word count: {countWord}</h3>
            </div>
        </Box>
    )
}