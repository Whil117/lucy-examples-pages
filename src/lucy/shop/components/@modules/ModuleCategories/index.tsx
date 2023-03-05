import AllCategories from "@/lucy/shop/assets/categories/index.json";
import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

const ModuleCategories: FC<Props> = () => {
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
        Shop Our Top Categories
      </AtomText>
      <AtomWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {AllCategories?.map((item) => (
          <AtomWrapper
            key={item.id}
            width="auto"
            customCSS={() => css`
              position: relative;
            `}
          >
            <AtomImage
              src={item.image}
              customCSS={() => css`
                img {
                  width: 180px;
                  height: 280px;
                  object-fit: cover;
                  border-radius: 15px;
                }
              `}
            />
            <AtomText
              customCSS={() => css`
                font-family: Inter;
                font-weight: bold;
                font-size: 22px;
                position: absolute;
                color: white;
                top: 0;
                padding: 20px;
              `}
            >
              {item.label}
            </AtomText>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleCategories;
