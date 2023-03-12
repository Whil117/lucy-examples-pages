import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleBestSelling: FC<Props> = (props) => {
  return (
    <AtomWrapper
      flexDirection="column"
      justifyContent="space-between"
      maxWidth="1440px"
      padding="0px 90px"
      gap="20px"
      customCSS={() => css`
        @media (max-width: 980px) {
          flex-wrap: wrap;
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
        Best Selling Store
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
        {Stores?.map((item) => (
          <AtomWrapper key={item.id}>
            <AtomImage
              src={item.background}
              customCSS={() => css`
                img {
                  border-radius: 10px;
                }
              `}
            />

            <AtomWrapper
              customCSS={() => css`
                position: relative;
                height: 30px;
                left: 15px;
              `}
            >
              <AtomImage
                src={item.imageProfile}
                customCSS={() => css`
                  position: absolute;
                  bottom: 0;
                `}
                width="80px"
                height="80px"
              />
            </AtomWrapper>
            <AtomText
              customCSS={() => css`
                font-family: Inter;
                font-weight: bold;
                font-size: 18px;
              `}
            >
              {item.title}
            </AtomText>
            <AtomText
              customCSS={() => css`
                font-family: Inter;
              `}
            >
              Bag Perfume
            </AtomText>
            <AtomText
              customCSS={() => css`
                font-family: Inter;
              `}
            >
              Delivery with in 24 hours
            </AtomText>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export const Stores = [
  {
    id: "33mx",
    title: "Staples",
    background:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png",
    imageProfile:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png",
  },
  {
    id: "9xmer",
    title: "Now Delivery",
    background:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png",
    imageProfile:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png",
  },
  {
    id: "oxm12",
    title: "Bevmo",
    background:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png",
    imageProfile:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png",
  },
  {
    id: "xamsd",
    title: "Quicklly",
    background:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png",
    imageProfile:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png",
  },
];

export default ModuleBestSelling;
