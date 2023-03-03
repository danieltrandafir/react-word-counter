import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export const Banner = () =>{
    return (
        <Box
      sx={{
        height: "30vh",
        backgroundColor: '#2F58CD',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <h1>Word Counter</h1>
        <h2>Paste or type your text here</h2>
    </Box>
     
    )
}