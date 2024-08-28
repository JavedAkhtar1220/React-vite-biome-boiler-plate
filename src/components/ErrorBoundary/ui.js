import { Button, Paper, Typography, styled } from '@mui/material';

// Container for the error boundary
export const ErrorContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

// Heading for error messages
export const ErrorHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.error.main,
  fontWeight: theme.typography.fontWeightBold,
}));

export const ErrorDetails = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

// Styled button
export const ReloadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
