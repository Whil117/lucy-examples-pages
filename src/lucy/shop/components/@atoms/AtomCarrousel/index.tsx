/* eslint-disable react-hooks/exhaustive-deps */
import { css, SerializedStyles } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, memo, useEffect, useMemo, useState } from "react";

type WithMPT = JSX.Element & {
  props: {
    id: string;
    children: JSX.Element[];
  };
};

type FCW = {
  props: {
    customCSS: () => SerializedStyles;
    children: WithMPT[];
  };
};

type CFCW = {
  handleNext: () => void;
  handleBack: () => void;
};

type Props = {
  children: ({ handleNext }: CFCW) => FCW;
  limit: number;
  breakpoints?: {
    [key: number]: {
      limit: number;
      customCSS: () => SerializedStyles;
    };
  };
};

const Carrousel: FC<Props> = ({
  children,
  limit: LimitDefault = 1,
  breakpoints = {},
}) => {
  const [count, setCount] = useState(0);

  const [{ limit, customCSS }, setLimit] = useState({
    limit: LimitDefault,
    customCSS: () => null,
  });

  const handleNext = () => {
    const elements = withChildren.props?.children?.find(
      (item) => item?.props?.id === "content"
    ) as WithMPT;

    setCount((c) =>
      c + limit < elements?.props?.children?.length ? c + 1 : c
    );
  };

  const handleBack = () => {
    setCount((c) => (c <= 0 ? 0 : c - 1));
  };

  const withChildren = children({
    handleNext,
    handleBack,
  });

  const elements = useMemo(
    () =>
      withChildren.props?.children?.map?.((item) =>
        item?.props?.id === "content"
          ? {
              ...item,
              props: {
                ...item.props,
                children: item?.props?.children?.slice(count, limit + count),
              },
            }
          : item
      ),
    [count, limit, withChildren]
  );

  useEffect(() => {
    Object.entries(breakpoints)?.map(([key, value]) => {
      if (window.innerWidth <= Number(key)) {
        setLimit({
          limit: value.limit,
          customCSS: value.customCSS as any,
        });
      } else {
        setLimit({
          limit: limit,
          customCSS: () => null as any,
        });
      }
    });
  }, []);

  return (
    <AtomWrapper
      {...withChildren.props}
      customCSS={() => css`
        ${withChildren.props?.customCSS?.()}
        ${customCSS?.()}
      `}
    >
      {elements}
    </AtomWrapper>
  );
};

const AtomCarrousel = memo(Carrousel);

export default AtomCarrousel;
