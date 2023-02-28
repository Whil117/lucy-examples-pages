import { css } from "@emotion/react";
import { AtomImage, AtomInput, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Links = [
  {
    id: "12",
    label: "Categories",
  },
  {
    id: "123123exafx",
    label: "Deals",
  },
  {
    id: "zxjk3w",
    label: "What's New",
  },
  {
    id: "j23mxdsa",
    label: "Delivery",
  },
];

const ModuleHeaderShop: FC<Props> = (props) => {
  return (
    <AtomWrapper>
      <AtomWrapper
        backgroundColor="#003d29"
        padding="10px 15px"
        flexDirection="row"
        justifyContent="space-between"
      >
        <AtomText fontFamily="Inter" color="white">
          +001234567890
        </AtomText>
        <AtomText fontFamily="Inter" color="white">
          Get 50% off on Selected items | Shop now
        </AtomText>
        <AtomText fontFamily="Inter" color="white">
          Eng
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        height="90px"
        customCSS={() => css`
          box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);
        `}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <AtomWrapper
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1440px"
          padding="0px 90px"
        >
          <AtomWrapper width="auto">
            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1677475419/dxnW70Dk_4x_kab6mh.jpg"
              width="120px"
              height="auto"
            />
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            width="auto"
            height="auto"
            gap="25px"
          >
            {Links?.map((item) => (
              <AtomText key={item.id} fontFamily="Inter">
                {item.label}
              </AtomText>
            ))}
          </AtomWrapper>
          <AtomWrapper width="auto">
            <AtomInput
              type="text"
              placeholder="Search Product"
              customCSS={() => css`
                width: 100%;
              `}
            />
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            width="auto"
            height="auto"
            gap="25px"
          >
            <AtomText fontFamily="Inter">Account</AtomText>
            <AtomText fontFamily="Inter">Cart</AtomText>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleHeaderShop;
