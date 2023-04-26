import { S } from 'components/LoadingSpinner/styles';

function LoadingSpinner() {
  return (
    <S.Spinner
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{ width: '12px', height: '12px', opacity: 1 }}
    />
  );
}

export default LoadingSpinner;
