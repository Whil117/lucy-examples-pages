import { FC, ReactNode } from "react";

import GetOff from "@/lucy/shop/assets/getuptooff/index.json";
import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper, NumberWithCommas } from "lucy-nxtjs";

type Props = {
  children?: ReactNode;
};

const ModuleGetUpToOff: FC<Props> = (props) => {
  return (
    <AtomWrapper
      flexDirection="column"
      justifyContent="space-between"
      maxWidth="1440px"
      padding="0px 90px"
      gap="20px"
      customCSS={() => css`
        @media (max-width: 980px) {
          padding: 0px 30px;
        }
      `}
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
          @media (max-width: 980px) {
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
          }
        `}
      >
        {GetOff?.map((item) => (
          <AtomWrapper
            key={item.id}
            customCSS={() => css`
              background-color: ${item.background};
              border-radius: 10px;
            `}
          >
            <AtomWrapper
              customCSS={() => css`
                padding: 20px;
              `}
            >
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 22px;
                `}
              >
                Save
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 26px;
                  color: ${item.color};
                `}
              >
                {NumberWithCommas(item.price, { prefix: "$" })}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                `}
              >
                Explore Our Furniture & Home Furnishing Range
              </AtomText>
            </AtomWrapper>
            <AtomImage
              src={item.url}
              customCSS={() => css`
                img {
                  border-radius: 0px 0px 10px 10px;
                }
              `}
              objectFit="contain"
            />
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleGetUpToOff;
