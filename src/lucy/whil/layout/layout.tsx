import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LayoutWhil: FC<Props> = ({ children }) => {
  return (
    <AtomWrapper
      flexDirection="row"
      justifyContent="space-between"
      height="100vh"
    >
      {children}
    </AtomWrapper>
  );
};

export default LayoutWhil;
