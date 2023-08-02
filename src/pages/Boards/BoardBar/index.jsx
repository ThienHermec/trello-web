import Box from '@mui/material/Box';

function BoardBad() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: (theme) => theme.trello.boarBarHeight,
        width: '100%',
        backgroundColor: 'primary.dark',
      }}
    >
      Board Bar
    </Box>
  );
}

export default BoardBad;
