import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutShop from "./layout";
import HomeLandingRamotion from "./pages/home";
type Props = {
  path: string;
};

const ShopRoutes: FC<Props> = ({ path }) => {
  return (
    <LayoutShop>
      <Routes location={path}>
        <Route path="/" element={<HomeLandingRamotion />} />
      </Routes>
    </LayoutShop>
  );
};

export default ShopRoutes;
