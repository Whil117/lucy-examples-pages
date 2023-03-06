import { AtomLoader } from "lucy-nxtjs";
import dynamic from "next/dynamic";
import RoutesConfig from "../config.types";

const WhilRoutes = dynamic(() => import("."), {
  ssr: true,
  loading: () => <AtomLoader type="fullscreen" colorLoad="#0073fc" isLoading />,
});

const WhilConfig: RoutesConfig = {
  name: "Whil",
  prod: "whil.vercel.app",
  dev: "197190f5-0f4b-44e3-9019-9ff951b8e8c0",
  routes: WhilRoutes,
};

export default WhilConfig;
