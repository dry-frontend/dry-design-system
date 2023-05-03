import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

const ImageWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid #95b7b8;
  background-color: #ffffff;

  ${Input}:checked + & {
    background-color: #317172;
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const S = {
  Label,
  Input,
  ImageWrapper
};
