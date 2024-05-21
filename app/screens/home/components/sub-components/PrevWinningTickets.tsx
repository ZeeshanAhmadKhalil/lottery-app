import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

interface PrevWinningTicketsProps {
  prevWinningtickets: number[];
  color: string;
}

function PrevWinningTickets({
  prevWinningtickets,
  color,
}: PrevWinningTicketsProps) {
  const renderprevWinningtickets = prevWinningtickets.map((item, key) => (
    <Box
      key={key}
      sx={{
        height: 36,
        width: 36,
        background: key == prevWinningtickets.length - 1 ? color : '#595857',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        mr: '7px',
      }}
    >
      <Typography sx={{ color: 'white' }} variant="h5">
        {item}
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ display: 'flex', mt: '24px' }}>{renderprevWinningtickets}</Box>
  );
}

export default PrevWinningTickets;
