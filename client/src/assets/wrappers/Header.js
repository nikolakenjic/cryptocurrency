import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  background-color: var(--background-secondary-color);
  padding: 0.5rem 0;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);

  .header__container {
    width: 90%;
    display: flex;
    justify-content: end;
  }

  .header__container-user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    column-gap: 0.5rem;
  }

  .header__container-user p {
    display: inline;
    text-transform: capitalize;
  }

  .header__container-user span {
    font-weight: bold;
  }

  .header__container-links {
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--text-color);
    transition: var(--transition);
    cursor: pointer;
  }

  a:hover {
    color: var(--primary-500);
  }

  @media (max-width: 1024px) {
    .header__container {
      width: 100%;
      padding-right: 2rem;
    }
  }

  @media (max-width: 640px) {
    font-size: var(--small-text);

    .header__container {
      justify-content: center;
      margin: auto;
      padding: 0;
    }
  }
`;

export default Wrapper;
