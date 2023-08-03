import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
  color: '#fff',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  '.MuiSvgIcon-root': {
    color: '#fff',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

function BoardBad() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        height: (theme) => theme.trello.boarBarHeight,
        width: '100%',
        overflow: 'auto',
        borderBottom: '1px solid #00bfa5',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label="HoangThienDev MERN Stack Board" clickable />

        <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} label="Public/Private Workspaces" clickable />

        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label="Add To Google Cloud" clickable />

        <Chip sx={MENU_STYLES} icon={<BoltIcon />} label="Automation" clickable />

        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label="Add To Google Cloud" clickable />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button
          sx={{ color: '#fff', borderColor: '#fff', '&:hover': { borderColor: '#fff' } }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
            },
          }}
        >
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Remy Sharp"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-1.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Travis Howard"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-2.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Cindy Baker"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-3.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Agnes Walker"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-4.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Trevor Henderson"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-5.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar
              alt="Remy Sharp"
              src="https://tinhayvip.com/wp-content/uploads/2022/02/cuc-pham-dau-nam-dien-vien-jav-an-khach-nhat-thang-7.jpg"
            />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </Tooltip>
          <Tooltip title="Top 10 Jav">
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBad;
