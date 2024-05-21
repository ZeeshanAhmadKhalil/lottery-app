import { Box, Typography } from '@mui/material';
import { useGetLotteryQuery } from '../services/home.api';
import { LotteryTypeEnum } from '~config/enums';
import { toPascalCase } from '~config/helpers';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import NextDraw from './sub-components/NextDraw';
import Loader from '~components/loader';
import { useState } from 'react';

interface ClassicProps {}

function Classic({}: ClassicProps) {
  const { data, isLoading } = useGetLotteryQuery({
    type: LotteryTypeEnum.Classic,
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

  const renderPoolAmount = poolAmount?.map?.(({ poolId, poolAmount }: any) => (
    <Box key={poolId} sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
        {poolId.slice(-5)}
      </Typography>
      <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
        {'99 99 99 99 99 99'}
      </Typography>
      <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
        {poolAmount}
      </Typography>
    </Box>
  ));

  return (
    <Box
      sx={{
        background: '#E9EEF6',
        borderRadius: '8px',
        mt: '16px',
        pb: '16px',
      }}
    >
      {isLoading ? (
        <Loader size={20} sx={{ pt: '16px' }} />
      ) : (
        <>
          <Box
            sx={{
              border: '0px solid red',
              p: '16px',
            }}
          >
            <Box sx={{ display: 'flex', border: '0px solid red' }}>
              <Typography sx={{ color: '#191978' }} variant="h5">
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
                <Typography sx={{ color: '#191978' }} variant="subtitle2">
                  Past {poolAmount?.length || 0} Results
                </Typography>
                <ZoomOutIcon sx={{ color: '#191978' }} />
              </Box>
            </Box>
            {renderPoolAmount}
          </Box>
          <Box></Box>
          <NextDraw color="#191978" seconds={seconds} setSeconds={setSeconds} />
        </>
      )}
    </Box>
  );
}

export default Classic;
