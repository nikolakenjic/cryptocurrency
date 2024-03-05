const Error = ({ isError }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '7rem' }}>
      <h2>{isError}</h2>
      <p style={{ marginTop: '1rem' }}>Please try again...</p>
    </div>
  );
};

export default Error;
