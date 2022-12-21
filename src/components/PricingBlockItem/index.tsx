import { css } from 'emotion';
import React from 'react';

interface IPricingBlockItemProps {
  children: React.ReactNode;
  isError?: boolean;
}

function PricingBlockItem(props: IPricingBlockItemProps) {
  const { children, isError = false } = props;

  return (
    <div className={pricingBlockItemCss}>
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

const pricingBlockItemCss = css`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 16px;
  align-items: flex-start;
`;

const pricingBlockItemCheckIconCss = css`
  padding-top: 2px;
  width: 24px;
`;

const pricingBlockItemTextCss = css``;

export default PricingBlockItem;
