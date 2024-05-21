import { Box, Typography } from '@mui/material';

interface WinningPotProps {
  winningPot: number;
}

function WinningPot({ winningPot }: WinningPotProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '16px',
      }}
    >
      <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>
        Winning Pot
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
          {winningPot}
        </Typography>
        <Typography sx={{ fontSize: '13px', fontWeight: '500', ml: '4px' }}>
          LUCKI
        </Typography>
      </Box>
    </Box>
  );
}

export default WinningPot;
