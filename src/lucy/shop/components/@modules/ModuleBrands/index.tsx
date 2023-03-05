import ChooseByBrand from "@/lucy/shop/assets/brands/index.json";
import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleBrands: FC<Props> = () => {
  return (
    <AtomWrapper
      flexDirection="column"
      justifyContent="space-between"
      maxWidth="1440px"
      padding="0px 90px"
      gap="20px"
    >
      <AtomText
        customCSS={() => css`
          font-family: Inter;
          font-weight: bold;
          font-size: 22px;
        `}
      >
        Choose By Brand
      </AtomText>
      <AtomWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        customCSS={() => css`
          display: grid;
          grid-template-columns: repeat(4, minmax(200px, 1fr));
          gap: 20px;
        `}
      >
        {ChooseByBrand?.map((item) => (
          <AtomWrapper
            key={item.id}
            width="auto"
            customCSS={() => css`
              position: relative;
              background-color: #f5f6f6;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 20px;
              gap: 20px;
            `}
          >
            <AtomImage
              src={item.image}
              width="auto"
              customCSS={() => css`
                img {
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                  border-radius: 15px;
                }
              `}
            />
            <AtomWrapper justifyContent="space-between">
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 18px;
                  color: black;
                `}
              >
                {item.label}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-size: 14px;
                  color: black;
                `}
              >
                Delivery with in 24 hours
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleBrands;
