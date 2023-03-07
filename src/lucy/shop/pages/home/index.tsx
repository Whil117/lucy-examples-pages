import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, memo, ReactNode } from "react";
import ModuleBestSelling from "../../components/@modules/ModuleBestSelling";
import ModuleBrands from "../../components/@modules/ModuleBrands";
import ModuleCategories from "../../components/@modules/ModuleCategories";
import ModuleFilterProduct from "../../components/@modules/ModuleFilterProducts";
import ModuleGetCash from "../../components/@modules/ModuleGetCash";
import ModuleGetUpToOff from "../../components/@modules/ModuleGetUpToOff";
import ModuleLine from "../../components/@modules/ModuleLine";
import WithFilterProducts from "../../components/@modules/ModuleProducts";
import ModuleServiceHelp from "../../components/@modules/ModuleServiceHelp";
import ModuleTrendingProducts from "../../components/@modules/ModuleTrending";

type Props = {
  children?: ReactNode;
};

const HomeShopPage: FC<Props> = () => {
  return (
    <AtomWrapper alignItems="center" gap="100px" margin="0px 0px 100px 0px">
      <AtomWrapper
        alignItems="center"
        justifyContent="center"
        customCSS={() => css`
          min-height: 620px;
          background-color: #dddddd;
          background-image: url(https://res.cloudinary.com/whil/image/upload/v1677559261/BANNER_bzjcwn.png);
        `}
      >
        <AtomWrapper maxWidth="1440px" padding="0px 90px" gap="20px">
          <AtomText
            fontFamily="Inter"
            color="#003d29"
            fontWeight="bold"
            fontSize="42px"
          >
            Shopping And <br /> Department Store.
          </AtomText>
          <AtomText fontFamily="Inter">
            Shopping is a bit of a relaxing hobby for me, which
            <br /> is sometimes troubling for the bank balance.
          </AtomText>
          <AtomButton
            backgroundColor="#003d29"
            customCSS={() => css`
              font-family: Inter;
              border-radius: 25px;
            `}
          >
            Learn More
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <ModuleCategories />

      <WithFilterProducts />
      <ModuleBrands />
      <ModuleGetUpToOff />
      <ModuleGetCash />
      <ModuleFilterProduct />
      <ModuleLine />
      <ModuleTrendingProducts />
      <ModuleBestSelling />
      <ModuleServiceHelp />
    </AtomWrapper>
  );
};

export default memo(HomeShopPage);
