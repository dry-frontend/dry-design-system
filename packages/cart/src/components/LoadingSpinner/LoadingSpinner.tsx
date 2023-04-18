import { Spinner } from 'components/LoadingSpinner/styles';

function LoadingSpinner() {
  return (
    <Spinner
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{ width: '15px', height: '15px', opacity: 1 }}
    />
  );
}

export default LoadingSpinner;
