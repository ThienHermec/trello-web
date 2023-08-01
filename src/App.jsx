import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';

function App() {
  return (
    <>
      <div>Hoang Thien</div>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Button
        onClick={() => {
          alert('clicked');
        }}
      >
        Click me
      </Button>
      <br />
      <AccessAlarm />
      <ThreeDRotation />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
