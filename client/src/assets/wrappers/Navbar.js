import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 3.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  background: var(--background-secondary-color);
  margin-bottom: 3rem;

  .navbar__container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .logo-img {
    height: 45px;
  }

  .navbar__container-icon {
    font-size: 1.7rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .navbar__container-icon:hover {
    color: var(--primary-500);
  }

  .navbar__container-info {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }

  @media (max-width: 1024px) {
    .navbar__container {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    height: 3.3rem;
    font-size: var(--small-text);

    .logo-img {
      height: 38px;
    }

    .header__container {
      justify-content: center;
      margin: auto;
    }
  }
`;

export default Wrapper;
