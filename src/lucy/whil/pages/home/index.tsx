import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const HomePage: FC<Props> = (props) => {
  return (
    <AtomWrapper>
      <object
        data="whilpdf.pdf?"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>El navegador no soporta la visualización de archivos PDF.</p>
      </object>
    </AtomWrapper>
  );
};

export default HomePage;
