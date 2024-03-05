import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 7rem 1rem;
  box-shadow: var(--shadow-3);
  position: relative;

  .detail__container {
    display: flex;
  }

  .detail__container-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.5rem;
    padding: 1rem;
    font-size: 1.2rem;
    line-height: 1rem;
  }

  .detail__container-info {
    margin-bottom: 1.2rem;
  }

  .detail__container-title {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .detail__container-info .row {
    margin-bottom: 0.7rem;
  }

  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }

  .detail__container-links {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 1rem;
    bottom: 1rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: var(--small-text);
    box-shadow: none;

    .detail__container {
      display: flex;
      flex-direction: column;
    }

    span {
      font-size: var(--large-text);
    }
  }

  @media (max-width: 300px) {
    span {
      font-size: var(--small-text);
    }

    .btn {
      font-size: var(--small-text);
      padding: 0.3rem 0.5rem;
    }
  }
`;

export default Wrapper;
