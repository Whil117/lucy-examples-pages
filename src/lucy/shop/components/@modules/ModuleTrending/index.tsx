import { css } from "@emotion/react";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleTrendingProducts: FC<Props> = (props) => {
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
        Trending Products For You!
      </AtomText>
      <AtomWrapper
        flexDirection="row"
        gap="20px"
        customCSS={() => css`
          @media (max-width: 980px) {
            flex-wrap: wrap;
          }
        `}
      >
        {TrendingProducts?.map((item) => (
          <AtomWrapper
            key={item.id}
            customCSS={() => css`
              gap: 15px;
              background-color: #f5f6f6;
            `}
          >
            <AtomImage src={item.image} />
            <AtomWrapper padding="20px" gap="10px">
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 22px;
                `}
              >
                {item.title}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                `}
              >
                Delivery with in 24 hours
              </AtomText>
              <AtomButton
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: 500;
                  font-size: 12px;
                  z-index: 1;
                  border-radius: 20px;
                  align-items: center;
                `}
                backgroundColor="#003d29"
              >
                Shop Now
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export const TrendingProducts = [
  {
    id: "dfd3",
    title: "Furniture Village",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png",
  },
  {
    id: "9cn34",
    title: "Fashion World",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png",
  },
];

export default ModuleTrendingProducts;
