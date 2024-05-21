import { Box, CircularProgress, SxProps } from '@mui/material';

interface LoaderProps {
  size?: number;
  sx?: SxProps;
}

function Loader({ size, sx }: LoaderProps) {
  return (
    <Box
      sx={{
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'center',
        my: 2,
        ...sx,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}

export default Loader;
