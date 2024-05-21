import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface PoolStatusProps {
  poolAmount: any[];
}

function PoolStatus({ poolAmount }: PoolStatusProps) {
  const [show, setShow] = useState(false);

  const renderPoolAmount = poolAmount?.map?.(
    ({ coinId, coinName, coinSymbol, poolAmount }) => (
      <Box
        key={coinId}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          src={`/icons/${coinName}.svg`}
          alt={coinName}
          width={16}
          height={16}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{poolAmount}</Typography>
          <Typography>{coinSymbol}</Typography>
        </Box>
      </Box>
    )
  );

  return (
    <>
      {show && (
        <Box sx={{ px: '16px', pt: '16px' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: '400', mb: '16px' }}>
            Current Pool Status
          </Typography>
          {renderPoolAmount}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          border: '0px solid red',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          mt: '16px',
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? (
          <>
            <ArrowDropUpIcon />
            <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>
              Close
            </Typography>
          </>
        ) : (
          <>
            <ArrowDropDownIcon />
            <Typography sx={{ fontSize: '13px', fontWeight: '500' }}>
              Current Pool Status
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default PoolStatus;
