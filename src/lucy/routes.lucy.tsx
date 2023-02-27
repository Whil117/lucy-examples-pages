import useProject from "@/hook/useProject";
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
      <AtomWrapper alignItems="center">
        <View path={path} />
      </AtomWrapper>
    </BrowserRouter>
  );
};

export default RoutesClient;
