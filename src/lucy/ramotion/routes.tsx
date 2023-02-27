import { AtomLoader } from "lucy-nxtjs";
import dynamic from "next/dynamic";
import RoutesConfig from "../config.types";

const RamotionRoutes = dynamic(() => import("."), {
  ssr: false,
  loading: () => <AtomLoader type="fullscreen" colorLoad="#0073fc" isLoading />,
});

const RamotionConfig: RoutesConfig = {
  name: "Ramotion",
  prod: "lucy-examples-ramotion",
  dev: "9b4b96e3-6a69-4777-8d5b-f583a365ee43",
  routes: RamotionRoutes,
};

export default RamotionConfig;
