import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Props {
  count: number;
  title: string;
  isRegistrarion?: boolean;
}

const CountdownBox = ({ count, title, isRegistrarion = false }: Props) => {
  const getFirstNumber = (date: number) => {
    if (date < 10) {
      return 0;
    }
    const firstDigit = date.toString().substring(0, 1);
    return firstDigit;
  }

  const getSecondNumber = (date: number) => {
    const secondDigit = date.toString().slice(-1);
    return Number(secondDigit);
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      display='flex'
      flexDirection='column'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
        <Box 
          display='flex'
          justifyContent='center'
          bgcolor='white'
          color="#a5a5a5"
          padding={(isSmallScreen && !isRegistrarion) ? 4 : (isSmallScreen && isRegistrarion) ? 2 : (!isSmallScreen && isRegistrarion) ? 2 : 6}
          borderRadius={2}
        >
          <Typography variant={isSmallScreen ? 'h2' : 'h1'}>{getFirstNumber(count)}</Typography>
          <Typography variant={isSmallScreen ? 'h2' : 'h1'}>{getSecondNumber(count)}</Typography>
        </Box>
        <Box 
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography variant={isSmallScreen ? 'h6' : 'h5'} fontWeight={500} color='white'>{title}</Typography>
        </Box>
    </Box>
  )
}

export default CountdownBox
