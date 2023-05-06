import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.GRAY_300};
  border-radius: 7px;

  height: 45px;
  box-sizing: border-box;
  border: none;
  padding: 4px;
`;

export const Input = styled.input`
  height: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: transparent;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.PRIMARY};
`;
