import useProject from "@/hook/useProject";
import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const RoutesClient: FC<Props> = (props) => {
  const { View, path } = useProject();
  return (
    <BrowserRouter>
      <View path={path} />
    </BrowserRouter>
  );
};

export default RoutesClient;
