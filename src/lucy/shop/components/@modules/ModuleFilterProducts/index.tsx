import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import WithCategories from "./WithCategories";
import WithFilterProducts from "./WithFilterProducts";

type Props = {
  children?: ReactNode;
};

const ModuleFilterProduct: FC<Props> = (props) => {
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
        Todays Best Deals For You!
      </AtomText>

      <WithCategories />
      <WithFilterProducts />
    </AtomWrapper>
  );
};

export default ModuleFilterProduct;
