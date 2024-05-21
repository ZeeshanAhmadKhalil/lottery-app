import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getTimer } from '~config/helpers';

interface NextDrawProps {
  setSeconds: Function;
  seconds: number;
  color: string;
}

function NextDraw({ seconds, setSeconds, color }: NextDrawProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: color,
        px: '16px',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'white',
        }}
      >
        Next Draw
      </Typography>
      <Box
        sx={{
          display: 'flex',
          border: '0px solid red',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '0px solid red',
          }}
        >
          <QueryBuilderIcon sx={{ color: 'white', ml: '2px' }} />
          <Typography
            sx={{
              color: 'white',
              fontSize: '20px',
              fontWeight: '500',
              ml: '2px',
            }}
          >
            {getTimer(seconds)}
          </Typography>
        </Box>
        <Button
          sx={{
            border: '0px solid red',
            textTransform: 'none',
            background: 'white',
            height: '24px',
            width: '80px',
            color,
            '&:hover': {
              background: 'white',
            },
            fontSize: '14px',
            fontWeight: '500',
          }}
          variant="contained"
        >
          Play
        </Button>
      </Box>
    </Box>
  );
}

export default NextDraw;
