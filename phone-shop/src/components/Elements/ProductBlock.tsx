import React from 'react';
import styled from 'styled-components';

const ProductDiv = styled.div`
  width: 250px;
  height: auto;
  background: none;
  border: 1px solid #274472;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ReadMore = styled.span`
  font-size: 1.1em;
  font-weight: 500;
  cursor: pointer;
`;

const CartSVG = styled.svg`
  cursor: pointer;
`;

const PhoneDescription = styled.p`
  width: 95%;
  margin: auto;
  text-align: justify;
  color: #274472;
  font-family: Montserrat;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 15px;
  margin-top: 10px;
  height: 103px;
  overflow: hidden;
`;

const PhoneTitle = styled.h1`
  color: #274472;
  font-family: Montserrat;
  font-size: 1.5em;
  font-weight: 400;
`;

export interface Phone {
  title: string;
  description: string;
  price: number;
  photos: string[];
  brand: string;
}

const Cart = () => {
  return (
    <CartSVG
      height="20pt"
      viewBox="0 -13 456.75885 456"
      width="20pt"
      fill="#274472"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0" />
      <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0" />
      <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0" />
    </CartSVG>
  );
};

const Price = styled.h1`
  font-size: 1.2em;
  font-weight: 400;
  color: #274472;
`;

const TwoElementsHolder = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
`;

const TallerText = styled.span`
  font-weight: 600;
`;

export const ProductBlock = ({
  title,
  description,
  price,
  photos,
  brand,
}: Phone) => {
  return (
    <ProductDiv>
      <PhoneTitle>{title}</PhoneTitle>
      <img src={photos[0]} />
      <PhoneDescription>
        {description.substring(0, 120)}
        <ReadMore> see more...</ReadMore>
      </PhoneDescription>
      <TwoElementsHolder>
        <Price>
          Price: <TallerText>{price}$</TallerText>
        </Price>
        <Cart />
      </TwoElementsHolder>
    </ProductDiv>
  );
};
