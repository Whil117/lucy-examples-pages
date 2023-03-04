import { css } from "@emotion/react";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { useQuery } from "react-query";
import AtomCarrousel from "../../@atoms/AtomCarrousel";

type Props = {
  children?: ReactNode;
};

type IAllProducts = {
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

import { useState } from "react";

function Carrusel() {
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setTranslateX(translateX + 100);
  };

  const handleNext = () => {
    setTranslateX(translateX - 100);
  };

  return (
    <AtomWrapper
      customCSS={() => css`
        display: flex;
        overflow: hidden;
      `}
    >
      <div
        className="carrusel-items"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        <AtomWrapper
          customCSS={() => css`
            flex: 0 0 100%;
            transition: transform 0.3s ease-in-out;
          `}
        >
          Item 1
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            flex: 0 0 100%;
            transition: transform 0.3s ease-in-out;
          `}
        >
          Item 2
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            flex: 0 0 100%;
            transition: transform 0.3s ease-in-out;
          `}
        >
          Item 3
        </AtomWrapper>
      </div>
      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Siguiente</button>
    </AtomWrapper>
  );
}

const ModuleProducts: FC<Props> = (props) => {
  const { isLoading, error, data } = useQuery<IAllProducts[]>("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
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
                `}
                id="content"
              >
                {data?.map((item) => (
                  <AtomWrapper key={item.id} width="320px" alignItems="center">
                    <AtomWrapper alignItems="center" justifyContent="center">
                      <AtomImage
                        src={item.image}
                        alt=""
                        width="220px"
                        objectFit="contain"
                        height="220px"
                      />
                    </AtomWrapper>
                    <AtomText
                      customCSS={() => css`
                        font-family: Inter;
                        font-weight: 600;
                        font-size: 17px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        height: 51px;
                        @media (max-width: 980px) {
                          text-align: center;
                        }
                      `}
                    >
                      {item.title}
                    </AtomText>
                  </AtomWrapper>
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
        <AtomCarrousel
          limit={2}
          breakpoints={{
            800: {
              limit: 1,
              customCSS: () => css``,
            },
          }}
        >
          {({ handleNext, handleBack }) => (
            <AtomWrapper
              flexDirection="column"
              alignItems="center"
              customCSS={() => css`
                position: relative;
              `}
            >
              <AtomWrapper
                customCSS={() => css`
                  flex-direction: row;
                  justify-content: center;
                `}
                id="content"
              >
                {data?.map((item) => (
                  <AtomWrapper key={item.id} width="320px">
                    <AtomWrapper alignItems="center" justifyContent="center">
                      <AtomImage
                        src={item.image}
                        alt=""
                        width="220px"
                        objectFit="contain"
                        height="220px"
                      />
                    </AtomWrapper>
                    <AtomText
                      customCSS={() => css`
                        font-family: Inter;
                        font-weight: 600;
                        font-size: 17px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      `}
                    >
                      {item.title}
                    </AtomText>
                  </AtomWrapper>
                ))}
              </AtomWrapper>
              <AtomWrapper alignItems="center" flexDirection="row" gap="20px">
                <AtomButton
                  onClick={handleBack}
                  customCSS={() => css`
                    font-family: Inter;
                    font-weight: 500;
                    font-size: 12px;
                    top: auto;
                    z-index: 1;
                    left: 0;
                    align-items: center;
                    bottom: auto;
                  `}
                  backgroundColor="#003d29"
                >
                  BACK
                </AtomButton>
                <AtomButton
                  onClick={handleNext}
                  customCSS={() => css`
                    font-family: Inter;
                    font-weight: 500;
                    font-size: 12px;
                    top: auto;
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
            </AtomWrapper>
          )}
        </AtomCarrousel>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default ModuleProducts;
