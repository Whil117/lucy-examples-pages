import { css } from "@emotion/react";
import { atom, useAtom } from "jotai";
import { AtomButton, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { useQuery } from "react-query";

type Props = {
  children?: ReactNode;
};

export const QUERY_SEARCH_ATOM = atom("electronics");

const WithCategories: FC<Props> = (props) => {
  const { isLoading, error, data } = useQuery<string[]>("isCategories", () =>
    fetch("https://fakestoreapi.com/products/categories").then((res) =>
      res.json()
    )
  );

  const [query, setQuery] = useAtom(QUERY_SEARCH_ATOM);

  return (
    <AtomWrapper flexDirection="row" width="auto" gap="20px">
      {data?.map((item) => (
        <AtomButton
          key={item}
          customCSS={() => css`
            font-family: Inter;
            border: 1px solid white;
            /* color: white; */
            color: black;
            border-radius: 20px;
            border: 1px solid gray;
            ${query === item &&
            css`
              color: white;
              background-color: #003d29;
            `}
          `}
          backgroundColor={query === item ? "#003d29" : "transparent"}
          onClick={() => {
            setQuery(item);
          }}
        >
          {item}
        </AtomButton>
      ))}
    </AtomWrapper>
  );
};

export default WithCategories;
