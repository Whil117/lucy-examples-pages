import { ComponentType } from "react";

type Props = {
  path: string;
};

type RoutesConfig = {
  name: string;
  prod: string;
  dev: string;
  routes: ComponentType<Props>;
};

export default RoutesConfig;
