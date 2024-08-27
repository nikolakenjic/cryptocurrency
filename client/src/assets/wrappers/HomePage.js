import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: var(--shadow-3);
  color: var(--text-color);

  .main__container-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .crypto-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .crypto-table th,
  .crypto-table td {
    padding: 0.7rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  .crypto-table th {
    font-weight: bold;
  }

  .crypto-row:hover td {
    background-color: var(--hover-color);
    cursor: pointer;
  }

  .btn__container {
    position: absolute;
    right: 2rem;
    bottom: 1rem;
    display: flex;
    column-gap: 0.1rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    box-shadow: none;
    padding: 0.2rem;

    .crypto-table th,
    .crypto-table td {
      padding: 0.5rem;
      font-size: var(--small-text);
    }

    .btn__container {
      position: absolute;
      right: 1rem;
    }

    .btn {
      font-size: var(--extra-small-text);
      padding: 0.325rem 0.6rem;
    }
  }

  @media (max-width: 351px) {
    padding: 0;

    .crypto-table th,
    .crypto-table td {
      padding: 0.5rem 0.3rem;
      font-size: var(--extra-small-text);
    }

    .btn__container {
      position: absolute;
      bottom: -2rem;
    }
  }
`;
