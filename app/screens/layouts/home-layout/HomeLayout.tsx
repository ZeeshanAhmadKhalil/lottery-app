import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Box
      className="home-layout"
      sx={{ border: '0px solid red', width: '358px', margin: '0 auto' }}
    >
      <Box sx={{ display: 'flex' }}>
        <IconButton>
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Box
          sx={{
            border: '0px solid red',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">Lottery</Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
}

export default HomeLayout;
