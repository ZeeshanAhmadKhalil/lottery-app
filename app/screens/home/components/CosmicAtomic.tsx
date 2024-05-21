import { Box, Typography } from '@mui/material';
import { useGetLotteryQuery } from '../services/home.api';
import { LotteryTypeEnum } from '~config/enums';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PrevWinningTickets from './sub-components/PrevWinningTickets';
import WinningPot from './sub-components/WinningPot';
import NextDraw from './sub-components/NextDraw';
import PoolStatus from './sub-components/PoolStatus';
import { toPascalCase } from '~config/helpers';
import Loader from '~components/loader';
import { useState } from 'react';

interface CosmicAtomicProps {
  type: LotteryTypeEnum;
  background: string;
  color: string;
}

function CosmicAtomic({ type, background, color }: CosmicAtomicProps) {
  const { data, isLoading } = useGetLotteryQuery({
    type,
  });

  const {
    currentPool,
    lotteryName,
    lotteryPrice,
    nextDraw = 0,
    poolAmount,
    prevTicketCount,
    previousWinningticket,
    roundNumber,
    showPoolDetail,
    ticketCount,
    winningPot,
  } = data?.data || {};

  const [seconds, setSeconds] = useState(nextDraw);

  return (
    <Box sx={{ background, borderRadius: '8px', mt: '16px' }}>
      {isLoading ? (
        <Loader size={20} sx={{ py: '16px' }} />
      ) : (
        <>
          <Box
            sx={{
              border: '0px solid red',
              p: '16px',
            }}
          >
            <Box sx={{ display: 'flex', border: '0px solid red' }}>
              <Typography sx={{ color }} variant="h5">
                {toPascalCase(lotteryName)}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  border: '0px solid red',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  pl: '12px',
                }}
              >
                <Typography sx={{ color }} variant="subtitle2">
                  No. {roundNumber}
                </Typography>
                <ZoomInIcon sx={{ color }} />
              </Box>
            </Box>
            <PrevWinningTickets
              color={color}
              prevWinningtickets={previousWinningticket}
            />
            <WinningPot winningPot={winningPot} />
          </Box>
          <NextDraw color={color} seconds={seconds} setSeconds={setSeconds} />
          <PoolStatus poolAmount={poolAmount} />
        </>
      )}
    </Box>
  );
}

export default CosmicAtomic;
