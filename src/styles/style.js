import { Box, Container, styled } from '@mui/material';

// Home Page

export const Wrapper = styled('div')({
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 2em',
});

export const ContentContainer = styled(Box)({
  minWidth: 300,
  maxWidth: 500,
});

export const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
  border: '1px solid #ccc',
  borderRadius: theme.spacing(1),
}));

export const ProfileImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: 160,
  height: 160,
  marginRight: '1rem',
  pointerEvents: 'none',
  boxShadow: theme.shadows[4],
}));

export const SocialLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});

export const SocialLink = styled('a')(({ theme }) => ({
  fontSize: '1rem',
  textDecoration: 'none',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  cursor: 'pointer',
  color: theme.palette.link.main,
}));
