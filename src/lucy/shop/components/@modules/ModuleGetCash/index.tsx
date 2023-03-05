import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleGetCash: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={() => css`
        background-image: url("https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png");
        min-height: 520px;
        background-size: cover;
      `}
      alignItems="center"
      justifyContent="center"
    >
      <AtomWrapper
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="0px 90px"
        alignItems="flex-end"
        gap="20px"
      >
        <AtomWrapper
          backgroundColor="#003d29"
          maxWidth="480px"
          height="480px"
          padding="30px"
          justifyContent="space-around"
        >
          <AtomText
            customCSS={() => css`
              color: white;
              font-family: Inter;
              font-weight: bold;
              font-size: 42px;
            `}
          >
            Get 5% Cash <br /> Back On $200
          </AtomText>
          <AtomText
            customCSS={() => css`
              color: white;
              font-size: 22px;
              font-family: Inter;
            `}
          >
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </AtomText>
          <AtomButton
            customCSS={() => css`
              font-family: Inter;
              background-color: transparent;
              border: 1px solid white;
              color: white;
              border-radius: 20px;
            `}
          >
            Learn More
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleGetCash;
