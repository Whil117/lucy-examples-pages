import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutWhil from "./layout/layout";
import HomeLandingRamotion from "./pages/home";
type Props = {
  path: string;
};

const WhilRoutes: FC<Props> = ({ path }) => {
  return (
    <LayoutWhil>
      <Routes location={path}>
        <Route path="/" element={<HomeLandingRamotion />} />
      </Routes>
    </LayoutWhil>
  );
};

export default WhilRoutes;
