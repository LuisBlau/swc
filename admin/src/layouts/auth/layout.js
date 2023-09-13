import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        backgroundImage: 'url(/assets/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Box
        component="header"
        sx={{
          left: 0,
          p: 3,
          position: 'fixed',
          top: 0,
          width: '100%'
        }}
      >
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: 'inline-flex',
            height: 100,
            width: 100
          }}
        >
          <Logo />
        </Box>
        <Typography
          align="center"
          color="inherit"
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
            mb: 1
          }}
          variant="h1"
        >
          Welcome to{' '}
          <Box
            component="a"
            sx={{ color: '#15B79E' }}
            target="_blank"
          >
            SWC Poker Admin Panel
          </Box>
        </Typography>
        <Typography
          align="center"
          sx={{ mb: 3 }}
          variant="subtitle1"
        >
          Your gateway to managing and overseeing all aspects of your poker platform.
        </Typography>
      {children}
      </Box>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};