import Box from '@mui/material/Box';

export const Banner = (props) =>{
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
        <h1 className='title'>{props.title}</h1>
        <h2 className='subtitle'>{props.subtitle}</h2>
    </Box>
     
    )
}