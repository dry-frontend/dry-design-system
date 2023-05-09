import { CardNumber, FlexWrapper, IcChip, CardNumberWrapper, Text, Wrapper } from './Card.styled';

interface CardProps {
  size: CardSize;
  cardNumber?: number | string;
  expirationDate?: {
    month: string;
    year: string;
  };
  ownerName?: string;
  cardType?: {
    name: string;
    color: string;
  };
  onClick?(): {};
}

export type CardSize = 'small' | 'medium' | 'large';

export const Card = ({
  size,
  cardNumber,
  expirationDate,
  ownerName,
  cardType,
  onClick
}: CardProps) => {
  const initValue: string[] = Array.from<string>({ length: 4 }).fill('');
  const cardNumbers = String(cardNumber)
    .split('')
    .reduce((result, item, index) => {
      result[Math.floor(index / 4)] += item;
      return result;
    }, initValue);

  return (
    <Wrapper size={size} color={cardType?.color} onClick={onClick}>
      <Text size={size}>{cardType?.name}</Text>

      <IcChip size={size} />

      <CardNumberWrapper>
        <CardNumber size={size}>{cardNumbers[0]}</CardNumber>
        <CardNumber size={size}>{cardNumbers[1]}</CardNumber>
        <CardNumber size={size}>{cardNumbers[2].replace(/./g, '*')}</CardNumber>
        <CardNumber size={size}>{cardNumbers[3].replace(/./g, '*')}</CardNumber>
      </CardNumberWrapper>

      <FlexWrapper>
        <Text size={size}>{ownerName}</Text>
        <Text size={size}>
          {expirationDate?.month} / {expirationDate?.year}
        </Text>
      </FlexWrapper>
    </Wrapper>
  );
};
