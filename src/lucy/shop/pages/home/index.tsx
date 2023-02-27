import { css } from "@emotion/react";
import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { useQuery } from "react-query";

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

const HomeShopPage: FC<Props> = (props) => {
  const { isLoading, error, data } = useQuery<IAllProducts[]>("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
  return (
    <AtomWrapper>
      <AtomText fontFamily="Rubik">HOLA SHOP</AtomText>
      <AtomWrapper
        customCSS={() => css`
          min-height: 620px;
        `}
      >
        <AtomText
          fontFamily="Rubik"
          color="green"
          fontWeight="bold"
          fontSize="42px"
        >
          Shopping And <br /> Department Store.
        </AtomText>
        <AtomText fontFamily="Rubik">
          Shopping is a bit of a relaxing hobby for me, which
          <br /> is sometimes troubling for the bank balance.
        </AtomText>
        <AtomButton
          backgroundColor="green"
          customCSS={() => css`
            font-family: Rubik;
          `}
        >
          Learn More
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default HomeShopPage;
