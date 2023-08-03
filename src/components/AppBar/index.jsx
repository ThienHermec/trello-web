import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Profiles from './Menus/Profiles';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
// import theme from '~/theme';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
  const [search, setSearch] = useState('');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <AppsIcon />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: '#fff' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
        </Box>
        <Button
          sx={{
            color: '#fff',
            border: 'none',
            '&:hover': {
              border: 'none',
            },
          }}
          variant="outlined"
          startIcon={<LibraryAddIcon />}
        >
          Outlined
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="Text"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#fff' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon onClick={() => setSearch('')} sx={{ color: '#fff', fontSize: 'small', cursor: 'pointer' }} />
            ),
          }}
          sx={{
            minWidth: 120,
            '& label': { color: '#fff' },
            '& input': { color: '#fff' },
            '& label.Mui-focused': { color: '#fff' },
            '& .MuiOutlinedInput-root ': {
              '& fieldset': { borderColor: '#fff' },
              '&:hover fieldset': { borderColor: '#fff' },
              '&.Mui-focused fieldset': { borderColor: '#fff' },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification" arrow>
          <Badge color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ color: '#fff' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" arrow>
          <HelpOutlineIcon sx={{ color: '#fff' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
