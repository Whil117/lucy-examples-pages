import { AtomLoader } from "lucy-nxtjs";
import dynamic from "next/dynamic";
import RoutesConfig from "../config.types";

const ShopRoutes = dynamic(() => import("."), {
  ssr: true,
  loading: () => <AtomLoader type="fullscreen" colorLoad="#12a14e" isLoading />,
});

const ShopConfig: RoutesConfig = {
  name: "Shop",
  prod: "lucy-examples-shop.vercel.app",
  dev: "6a587b48-6234-40eb-8c89-34a81cb9b7ed",
  routes: ShopRoutes,
};

export default ShopConfig;
