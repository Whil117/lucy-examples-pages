import RamotionConfig from "./ramotion/routes";
import ShopConfig from "./shop/routes";
import WhilConfig from "./whil/routes";

const allRoutes = [RamotionConfig, WhilConfig, ShopConfig];

const onlyWithRoute = {
  [RamotionConfig.prod]: RamotionConfig,
  [WhilConfig.prod]: WhilConfig,
  [ShopConfig.prod]: ShopConfig,
};

export { allRoutes, onlyWithRoute };
