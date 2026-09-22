import { css } from 'emotion';
import React from 'react';

interface IPricingBlockItemProps {
  children: React.ReactNode;
  isError?: boolean;
  large?: boolean;
  bonus?: boolean;
}

function PricingBlockItem(props: IPricingBlockItemProps) {
  const { children, large = false, isError = false, bonus = false } = props;

  return (
    <div className={pricingBlockItemCss(large, bonus)}>
      {
        <img
          className={pricingBlockItemCheckIconCss(bonus)}
          src={
            isError
              ? 'https://i.imgur.com/HZEWBOD.png'
              : 'https://i.imgur.com/UL8xQoy.png'
          }
          alt="check"
        />
      }
      <span className={pricingBlockItemTextCss}>{children}</span>
    </div>
  );
}

const pricingBlockItemCss = (large?: boolean, bonus?: boolean) => css`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 16px;
  align-items: flex-start;
  font-size: ${large ? '18px' : '16px'};
  ${bonus
    ? css`
        scale: 0.9;
        rotate: -7deg;
        margin-top: 16px;
        text-align: center;
      `
    : css`
        scale: 1;
      `}
`;

const pricingBlockItemCheckIconCss = (bonus?: boolean) => css`
  padding-top: 2px;
  width: 24px;
  ${!bonus
    ? css`
        visibility: visible;
      `
    : css`
        visibility: hidden;
      `}
`;

const pricingBlockItemTextCss = css``;

export default PricingBlockItem;
