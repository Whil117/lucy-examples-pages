import useProject from "@/hook/useProject";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, memo, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Client: FC<Props> = (props) => {
  const { View, path } = useProject();
  return (
    <AtomWrapper alignItems="center">
      <View path={path} />
    </AtomWrapper>
  );
};

const RoutesClient = memo(Client);

export default RoutesClient;
