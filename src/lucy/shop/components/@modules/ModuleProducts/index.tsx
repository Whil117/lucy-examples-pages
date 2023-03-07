import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, memo, ReactNode } from "react";
import { useQuery } from "react-query";
import AtomCardProduct from "../../@atoms/AtomCard";
import AtomCarrousel from "../../@atoms/AtomCarrousel";

type Props = {
  children?: ReactNode;
};

export type IAllProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const WithFilterProducts: FC<Props> = (props) => {
  const { isLoading, error, data } = useQuery<IAllProducts[]>(
    "filterProducts",
    () => fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

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
        Todays Best Deals For You!
      </AtomText>
      <AtomWrapper>
        <AtomCarrousel
          limit={5}
          breakpoints={{
            800: {
              limit: 1,
              customCSS: () => css``,
            },
          }}
        >
          {({ handleNext, handleBack }) => (
            <AtomWrapper
              flexDirection="row"
              alignItems="center"
              customCSS={() => css`
                position: relative;
              `}
            >
              <AtomButton
                onClick={handleBack}
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: 500;
                  font-size: 12px;
                  top: auto;
                  position: absolute;
                  z-index: 1;
                  left: 0;
                  align-items: center;
                  bottom: auto;
                `}
                backgroundColor="#003d29"
              >
                BACK
              </AtomButton>
              <AtomWrapper
                customCSS={() => css`
                  flex-direction: row;
                  justify-content: space-between;
                  @media (max-width: 980px) {
                    justify-content: center;
                    align-items: center;
                  }
                  gap: 10px;
                `}
                id="content"
              >
                {data?.map((item) => (
                  <AtomCardProduct key={item.id} {...item} />
                ))}
              </AtomWrapper>
              <AtomButton
                onClick={handleNext}
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: 500;
                  font-size: 12px;
                  top: auto;
                  position: absolute;
                  z-index: 1;
                  right: 0;
                  align-items: center;
                  bottom: auto;
                `}
                backgroundColor="#003d29"
              >
                NEXT
              </AtomButton>
            </AtomWrapper>
          )}
        </AtomCarrousel>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default memo(WithFilterProducts);
