import { Box, Typography } from '@mui/material';
import { LotteryTypeEnum } from '~config/enums';
import Classic from './components/Classic';
import CosmicAtomic from './components/CosmicAtomic';

function Home({}) {
  return (
    <Box>
      <Typography sx={{ mt: 1 }} variant="h5">
        Latest Results
      </Typography>
      <CosmicAtomic
        background="#EEE1F0"
        color="#961A88"
        type={LotteryTypeEnum.Cosmic}
      />
      <Classic />
      <CosmicAtomic
        background="#E9FAF7"
        color="#00AEB1"
        type={LotteryTypeEnum.Atomic}
      />
    </Box>
  );
}

export default Home;
