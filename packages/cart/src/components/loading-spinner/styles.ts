import styled from 'styled-components';

export const S = {
  Spinner: styled.div`
    display: inline-block;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `
};
