import { css } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import ModuleHeaderShop from "../components/@modules/ModuleHeader";

type Props = {
  children?: ReactNode;
};

const LayoutShop: FC<Props> = ({ children }) => {
  return (
    <AtomWrapper
      customCSS={() => css`
        min-height: calc(100vh - 90px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fbfbfb;
        @media (max-width: 768px) {
          padding: 0 30px;
        }
      `}
    >
      <ModuleHeaderShop />
      {children}
    </AtomWrapper>
  );
};

export default LayoutShop;
