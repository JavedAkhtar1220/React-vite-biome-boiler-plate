import PropTypes from 'prop-types';
import { Component, useEffect, useState } from 'react';
import UIButton from '../Button';
import { ErrorContainer, ErrorDetails, ErrorHeading, ReloadButton } from './ui';

const isDevelopment = import.meta.env.MODE === 'development';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    // Reset the error state when children change
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  }, [children]);

  // This is similar to the static getDerivedStateFromError in class components
  const componentDidCatch = (error, info) => {
    setHasError(true);
    setError(error);
    setErrorInfo(info);
  };

  // Use React's error boundary feature by throwing the error in a child component
  // When this child throws, the error is caught by the parent which then sets the state
  if (hasError) {
    return (
      <ErrorContainer>
        <ErrorHeading variant='h4'>
          {isDevelopment ? 'An error occurred' : 'Something went wrong'}
        </ErrorHeading>
        {isDevelopment ? (
          <div>
            <ErrorDetails variant='body1'>
              {error.toString()}
              <br />
              {errorInfo ? errorInfo.componentStack : ''}
            </ErrorDetails>
          </div>
        ) : (
          <div>
            <ErrorDetails variant='body1'>Please try again later.</ErrorDetails>
          </div>
        )}
        <ReloadButton
          variant='contained'
          color='primary'
          onClick={() => window.location.reload()}>
          Reload
        </ReloadButton>
      </ErrorContainer>
    );
  }

  return (
    <ErrorThrower componentDidCatch={componentDidCatch}>
      {children}
    </ErrorThrower>
  );
};

class ErrorThrower extends Component {
  componentDidCatch(error, info) {
    this.props.componentDidCatch(error, info);
  }

  render() {
    return this.props.children;
  }
}

ErrorThrower.propTypes = {
  componentDidCatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
