import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CorporateTax from './pages/services/CorporateTax';
import BankAccount from './pages/services/BankAccount';
import Accounting from './pages/services/Accounting';
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebDevelopment from './pages/services/WebDevelopment';
import SEO from './pages/services/SEO';
import Compliance from './pages/services/Compliance';
import GoldenVisa from './pages/services/GoldenVisa';
import ProServices from './pages/services/ProServices';
import DubaiSouth from './pages/freezones/DubaiSouth';
import DubaiSiliconOasis from './pages/freezones/DubaiSiliconOasis';
import DubaiAirportFreeZone from './pages/freezones/DubaiAirportFreeZone';
import DMCC from './pages/freezones/DMCC';
import IFZA from './pages/freezones/IFZA';
import ADGM from './pages/freezones/ADGM';
import JAFZA from './pages/freezones/JAFZA';
import SHAMS from './pages/freezones/SHAMS';
import SAIF from './pages/freezones/SAIF';
import DHCC from './pages/freezones/DHCC';
import D3 from './pages/freezones/D3';
import DIC from './pages/freezones/DIC';
import DWTC from './pages/freezones/DWTC';
import Meydan from './pages/freezones/Meydan';
import BusinessActivities from './pages/freezones/BusinessActivities';
import FujairahCreativeCity from './pages/freezones/FujairahCreativeCity';
import Hamriyah from './pages/freezones/Hamriyah';
import AjmanFreeZone from './pages/freezones/AjmanFreeZone';
import DubaiMediaCity from './pages/freezones/DubaiMediaCity'; // ✅ NEW
import DubaiKnowledgePark from './pages/freezones/DubaiKnowledgePark';
import DubaiCommerCity from './pages/freezones/DubaiCommerCity';
import KIZAD from './pages/freezones/KIZAD';
import DUQE from './pages/freezones/DUQE';
import FreeZoneLocations from './pages/freezones/FreeZoneLocations';
import UAQFreeZone from './pages/freezones/UAQFreeZone';
import RAKEZ from './pages/freezones/RAKEZ';
import MainlandActivities from './pages/mainland/MainlandActivities';
import HiringEmployeeManagement from './pages/mainland/HiringEmployeeManagement';
import OfficeSpaceSolutions from './pages/mainland/OfficeSpaceSolutions';
import MainlandVisa from './pages/mainland/MainlandVisa';
import LaunchOperateExpand from './pages/mainland/LaunchOperateExpand';
import CompanyFormation from './pages/services/business-setup/CompanyFormation';
import OffshoreCompanySetup from './pages/services/business-setup/OffshoreCompanySetup';
import LocalCorporateSponsor from './pages/services/business-setup/LocalCorporateSponsor';
import ResidenceVisa from './pages/services/business-setup/ResidenceVisa';
import MainlandCompanyFormation from './pages/services/business-setup/MainlandCompanyFormation';
import CompanyRegistration from './pages/services/business-setup/CompanyRegistration';
import EcommerceLicense from './pages/services/business-setup/EcommerceLicense';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-txt">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/corporate-tax-vat" element={<CorporateTax />} />
        <Route path="/services/bank-account" element={<BankAccount />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/compliance" element={<Compliance />} />
        <Route path="/services/golden-visa" element={<GoldenVisa />} />
        <Route path="/services/pro-services" element={<ProServices />} />
        <Route path="/free-zones/dubai-south" element={<DubaiSouth />} />
        <Route path="/free-zones/dubai-silicon-oasis" element={<DubaiSiliconOasis />} />
        <Route path="/free-zones/dubai-airport-free-zone" element={<DubaiAirportFreeZone />} />
        <Route path="/free-zones/dmcc" element={<DMCC />} />
        <Route path="/free-zones/ifza" element={<IFZA />} />
        <Route path="/free-zones/adgm" element={<ADGM />} />
        <Route path="/free-zones/jafza" element={<JAFZA />} />
        <Route path="/free-zones/shams" element={<SHAMS />} />
        <Route path="/free-zones/saif" element={<SAIF />} />
        <Route path="/free-zones/dubai-healthcare-city" element={<DHCC />} />
        <Route path="/free-zones/dubai-design-district" element={<D3 />} />
        <Route path="/free-zones/dubai-internet-city" element={<DIC />} />
        <Route path="/free-zones/dwtc" element={<DWTC />} />
        <Route path="/free-zones/meydan" element={<Meydan />} />
        <Route path="/free-zones/business-activities" element={<BusinessActivities />} />
        <Route path="/free-zones/fujairah-creative-city" element={<FujairahCreativeCity />} />
        <Route path="/free-zones/hamriyah" element={<Hamriyah />} />
        <Route path="/free-zones/ajman-free-zone" element={<AjmanFreeZone />} />
        <Route path="/free-zones/dubai-media-city" element={<DubaiMediaCity />} /> {/* ✅ NEW */}
        <Route path="/free-zones/dubai-knowledge-park" element={<DubaiKnowledgePark />} />
<Route path="/free-zones/dubai-commercity" element={<DubaiCommerCity />} />
<Route path="/free-zones/kizad" element={<KIZAD />} />
<Route path="/free-zones/duqe" element={<DUQE />} />
<Route path="/free-zones/locations" element={<FreeZoneLocations />} />
<Route path="/free-zones/uaq-free-zone" element={<UAQFreeZone />} />
<Route path="/free-zones/rakez" element={<RAKEZ />} />
<Route path="/mainland/mainland-activities" element={<MainlandActivities />} />
<Route path="/mainland/hiring-employee-management" element={<HiringEmployeeManagement />} />
<Route path="/mainland/office-space-solutions" element={<OfficeSpaceSolutions />} />
<Route path="/mainland/mainland-visa" element={<MainlandVisa />} />
<Route path="/mainland/launch-operate-expand" element={<LaunchOperateExpand />} />
<Route path="/services/company-formation" element={<CompanyFormation />} />
<Route path="/services/offshore-company-setup" element={<OffshoreCompanySetup />} />
<Route path="/services/local-corporate-sponsor" element={<LocalCorporateSponsor />} />
<Route path="/services/residence-visa" element={<ResidenceVisa />} />
<Route path="/services/mainland-company-formation" element={<MainlandCompanyFormation />} />
<Route path="/services/company-registration" element={<CompanyRegistration />} />
<Route path="/services/ecommerce-license" element={<EcommerceLicense />} />

      </Routes>
      <Footer />
    </div>
  );
}