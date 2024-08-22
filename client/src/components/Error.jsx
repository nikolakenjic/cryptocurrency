import Button from '../UI/Button';

const Error = ({ isError, onRetry }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '7rem' }}>
      <h2>{isError}</h2>
      <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        Please try again...
      </p>
      <Button onClick={onRetry} type="button" btnName="Retry" />
    </div>
  );
};

export default Error;
