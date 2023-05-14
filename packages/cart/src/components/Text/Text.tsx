import styled from 'styled-components';

export interface TextProps {
  weight?: React.CSSProperties['fontWeight'];
  size?: number;
}

const Text = styled.p<TextProps>`
  h1&,
  h2&,
  h3&,
  h4&,
  h5&,
  h6& {
    font-weight: bold;
  }

  h1& {
    font-size: 32px;
  }

  h2& {
    font-size: 28px;
  }

  h3& {
    font-size: 24px;
  }

  h4& {
    font-size: 20px;
  }

  h5& {
    font-size: 16px;
  }

  h6& {
    font-size: 12px;
  }

  &&& {
    word-break: break-word;

    font-size: ${({ size }) => `${size}px` || 'initial'};
    font-weight: ${({ weight }) => weight || 'initial'};
  }
`;

export default Text;
