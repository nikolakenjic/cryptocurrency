import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  margin: 0 1rem;
  padding: 0.2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }

  svg {
    transition: var(--transition);
  }

  svg:hover {
    color: ${(props) => props.color || 'var(--primary-500)'};
  }
`;

export default Wrapper;
