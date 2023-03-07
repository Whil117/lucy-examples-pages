import { css } from "@emotion/react";
import {
  AtomButton,
  AtomImage,
  AtomText,
  AtomWrapper,
  NumberWithCommas,
} from "lucy-nxtjs";
import { FC } from "react";
import { IAllProducts } from "../../@modules/ModuleProducts";

const AtomCardProduct: FC<IAllProducts> = (item) => {
  return (
    <AtomWrapper width="320px" alignItems="flex-start" gap="10px">
      <AtomWrapper alignItems="center" justifyContent="center">
        <AtomImage
          src={item.image}
          alt=""
          width="220px"
          objectFit="contain"
          height="220px"
        />
      </AtomWrapper>
      <AtomWrapper
        flexDirection="row"
        customCSS={() => css`
          display: grid;
          grid-template-columns: 1fr auto;
        `}
      >
        <AtomText
          customCSS={() => css`
            font-family: Inter;
            font-weight: 600;
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            height: 47px;
            @media (max-width: 980px) {
              text-align: center;
            }
          `}
        >
          {item.title}
        </AtomText>
        <AtomText
          customCSS={() => css`
            font-family: Inter;
            font-weight: 600;
            font-size: 17px;
            @media (max-width: 980px) {
              text-align: center;
            }
          `}
        >
          {NumberWithCommas(item.price, { prefix: "$" })}
        </AtomText>
      </AtomWrapper>
      <AtomText
        customCSS={() => css`
          font-family: Inter;
          font-size: 14px;
        `}
      >
        raiting {item.rating?.rate}
      </AtomText>
      <AtomText
        customCSS={() => css`
          font-family: Inter;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 45px;
          @media (max-width: 980px) {
            text-align: center;
          }
        `}
      >
        {item.description}
      </AtomText>
      <AtomButton
        customCSS={() => css`
          font-family: Inter;
          font-weight: 500;
          font-size: 12px;
          z-index: 1;
          align-items: center;
        `}
      >
        Add to cart
      </AtomButton>
    </AtomWrapper>
  );
};

export default AtomCardProduct;
