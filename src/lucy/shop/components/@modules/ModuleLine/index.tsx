import { css } from "@emotion/react";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModuleLine: FC<Props> = () => {
  return (
    <AtomWrapper
      alignItems="center"
      justifyContent="center"
      customCSS={() => css`
        background-color: #ffe6cc;
      `}
    >
      <AtomWrapper
        flexDirection="row"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="40px 90px"
        gap="20px"
        alignItems="center"
        customCSS={() => css`
          background-color: #ffe6cc;
        `}
      >
        <AtomWrapper>
          <AtomText
            customCSS={() => css`
              font-family: Inter;
              font-weight: bold;
              font-size: 42px;
            `}
          >
            Get 5% Cash Back
          </AtomText>
          <AtomText
            customCSS={() => css`
              font-family: Inter;
              font-weight: bold;
              font-size: 22px;
            `}
          >
            on Shopcart.com
          </AtomText>
          <AtomButton
            backgroundColor="#003d29"
            color="white"
            customCSS={() => css`
              font-family: Inter;
              font-weight: bold;
              border-radius: 20px;
            `}
          >
            Learn More
          </AtomButton>
        </AtomWrapper>
        <AtomImage
          width="320px"
          src="https://res.cloudinary.com/whil/image/upload/v1678157832/Captura_de_pantalla_2023-03-06_205636_pbsqot.png"
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleLine;
