import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  .fiat-currency__title {
    color: var(--primary-500);
  }

  .fiat-currency__info {
    border-radius: var(--border-radius);
    background-color: var(--primary-500);
    text-align: center;
    padding: 0.5rem 0;
    border: none;
    color: var(--text-color);
    transition: var(--transition);
  }

  .fiat-currency__info:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  .fiat-currency__info option {
    background-color: var(--primary-400);
  }

  .fiat-currency__info:focus {
    background: var(--primary-500);
    box-shadow: none;
  }

  @media (max-width: 640px) {
    .fiat-currency__title {
      font-size: var(--small-text);
    }
  }
`;

export default Wrapper;
