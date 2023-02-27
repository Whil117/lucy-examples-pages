import { css } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LayoutRamotion: FC<Props> = ({ children }) => {
  return (
    <AtomWrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1440px"
      padding="0px 90px"
      flexWrap="wrap"
      margin="50px 0px 0px 0px"
      customCSS={() => css`
        @media (max-width: 980px) {
          padding: 0px 30px;
          justify-content: center;
        }
      `}
    >
      {children}
    </AtomWrapper>
  );
};

export default LayoutRamotion;
