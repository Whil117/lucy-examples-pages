import { css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { AtomLoader, AtomWrapper } from "lucy-nxtjs";
import { FC, memo, ReactNode } from "react";
import { useQuery } from "react-query";
import AtomCardProduct from "../../../@atoms/AtomCard";
import { IAllProducts } from "../../ModuleProducts";
import { QUERY_SEARCH_ATOM } from "../WithCategories";

type Props = {
  children?: ReactNode;
};

const WithFilterProducts: FC<Props> = (props) => {
  const query = useAtomValue(QUERY_SEARCH_ATOM);
  const { isLoading, error, data } = useQuery<IAllProducts[]>(
    ["filterProducts", query],
    () =>
      fetch(`https://fakestoreapi.com/products/category/${query}`).then((res) =>
        res.json()
      )
  );

  return (
    <AtomWrapper
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      minHeight="320px"
    >
      {isLoading ? (
        <AtomLoader
          type="medium"
          isLoading
          colorLoad="#003d29"
          customCSS={() => css`
            align-items: center;
          `}
        />
      ) : (
        <>
          {data?.map((item) => (
            <AtomCardProduct key={item.id} {...item} />
          ))}
        </>
      )}
    </AtomWrapper>
  );
};

export default memo(WithFilterProducts);
