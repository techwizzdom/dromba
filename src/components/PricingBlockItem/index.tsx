import { css } from 'emotion';
import React from 'react';

interface IPricingBlockItemProps {
  children: React.ReactNode;
  isError?: boolean;
  large?: boolean;
}

function PricingBlockItem(props: IPricingBlockItemProps) {
  const { children, large = false, isError = false } = props;

  return (
    <div className={pricingBlockItemCss(large)}>
      <img
        className={pricingBlockItemCheckIconCss}
        src={
          isError
            ? 'https://i.imgur.com/HZEWBOD.png'
            : 'https://i.imgur.com/UL8xQoy.png'
        }
        alt="check"
      />
      <span className={pricingBlockItemTextCss}>{children}</span>
    </div>
  );
}

const pricingBlockItemCss = (large?: boolean) => css`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 16px;
  align-items: flex-start;
  font-size: ${large ? '18px' : '16px'};
`;

const pricingBlockItemCheckIconCss = css`
  padding-top: 2px;
  width: 24px;
`;

const pricingBlockItemTextCss = css``;

export default PricingBlockItem;
