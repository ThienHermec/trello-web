// Board details
import Container from '@mui/material/Container';
import AppBar from '~/components/AppBar';
import BoardBad from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBad />
      <BoardContent />
    </Container>
  );
}

export default Board;
