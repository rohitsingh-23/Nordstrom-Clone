import { ActiveWearNav } from "./Navigations/ActiveWear";
import { AdultNav } from "./Navigations/AdultNav";
import { BeautyNav } from "./Navigations/BeautyNav";
import { DesignerNav } from "./Navigations/DesignerNav";
import { HomeNav } from "./Navigations/HomeNav";
import { KidsNav } from "./Navigations/KidsNav";
import { MenNav } from "./Navigations/MenNav";
import { SalesNav } from "./Navigations/SalesNav";
import { WomenNav } from "./Navigations/WomenNav";

export const BottomHead = () => {
  return (
    <div style={{ display: "flex" }}>
      <SalesNav />
      <WomenNav />
      <MenNav />
      <KidsNav />
      <AdultNav />
      <ActiveWearNav />
      <HomeNav />
      <BeautyNav />
      <DesignerNav />
    </div>
  );
};
