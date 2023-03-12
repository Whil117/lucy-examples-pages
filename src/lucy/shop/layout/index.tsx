import { css } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import LayoutFooter from "../components/layout/footer";
import ModuleHeaderShop from "../components/layout/header";

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
      `}
    >
      <ModuleHeaderShop />
      {children}
      <LayoutFooter />
    </AtomWrapper>
  );
};

export default LayoutShop;
