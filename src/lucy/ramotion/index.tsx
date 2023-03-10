import { AtomText } from "lucy-nxtjs";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutRamotion from "./layout/layout";
import HomeLandingRamotion from "./pages/home";
type Props = {
  path: string;
};

const RamotionRoutes: FC<Props> = ({ path }) => {
  return (
    <LayoutRamotion>
      <Routes location={path}>
        <Route path="/" element={<HomeLandingRamotion />} />
        <Route path="/about" element={<AtomText>ABOUT</AtomText>} />
      </Routes>
    </LayoutRamotion>
  );
};

export default RamotionRoutes;
