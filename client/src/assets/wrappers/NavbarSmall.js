import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  z-index: 30;
  background-color: var(--primary-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5rem;

  .navbar-small__close {
    font-size: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  a {
    margin-top: 1rem;
    color: var(--text-color);
    transition: var(--transition);
    margin-bottom: 1.3rem;
  }
`;

export default Wrapper;
