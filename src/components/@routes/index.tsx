import useProject from "@/hook/useProject";
import { css } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const RoutesClient: FC<Props> = (props) => {
  const { View, path } = useProject();
  return (
    <BrowserRouter>
      <AtomWrapper
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1440px"
        padding="0px 90px"
        flexWrap="wrap"
        margin="50px 0px 0px 0px"
        customCSS={() => css`
          @media (max-width: 980px) {
            padding: 0px 30px;
            justify-content: center;
          }
        `}
      >
        <View path={path} />
      </AtomWrapper>
    </BrowserRouter>
  );
};

export default RoutesClient;
