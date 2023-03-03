import Box from '@mui/material/Box';
import { useState } from "react";


export const WordCounter = () =>{
    const [countWord, setCountWord] = useState(0)

    const updateWordCount = (event) => {
        const textValue = event.target.value
        const textArray = textValue.split(' ').map(word => word);
        
        setCountWord(textArray.length)
        
    }

    
    return (
        <Box sx={{height: "70vh", backgroundColor:"#BFDCE5", paddingTop: "10%"}}>
            <div>
                <textarea rows={8}
                onChange={updateWordCount}>
                </textarea>
            </div>
            <div>
                <h3>Word count: {countWord}</h3>
            </div>
        </Box>
    )
}