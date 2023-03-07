import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleServiceHelp: FC<Props> = (props) => {
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
        Services To Help You Shop
      </AtomText>
      <AtomWrapper flexDirection="row" gap="20px">
        {ServiceHelp?.map((item) => (
          <AtomWrapper
            key={item.id}
            customCSS={() => css`
              background-color: #f5f6f6;
            `}
          >
            <AtomWrapper
              customCSS={() => css`
                padding: 25px;
                min-height: 240px;
              `}
            >
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 22px;
                `}
                width="75%"
              >
                {item.title}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                `}
              >
                Updates on safe Shopping in our Stores
              </AtomText>
            </AtomWrapper>
            <AtomImage src={item.image} />
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export const ServiceHelp = [
  {
    id: "dom3d",
    title: "Frequently Asked Questions",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png",
  },
  {
    id: "xzew",
    title: "Online Payment Process",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png",
  },
  {
    id: "123xdsaf",
    title: "Home Delivery Options",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png",
  },
];

export default ModuleServiceHelp;
