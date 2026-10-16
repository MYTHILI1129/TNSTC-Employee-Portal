import "./App.css";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Announcements from "./components/Announcements";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DutyBoard from "./pages/DutyBoard";
import SalarySlip from "./pages/SalarySlip";
import Overtime from "./pages/Overtime";
import FamilyPass from "./pages/FamilyPass";
import LeaveApply from "./pages/LeaveApply";
import IncidentReport from "./pages/IncidentReport";
import VehicleComplaint from "./pages/VehicleComplaint";
import Training from "./pages/Training";
import HealthRecords from "./pages/HealthRecords";
import PFLoan from "./pages/PFLoan";
import ServiceCertificate from "./pages/ServiceCertificate";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";


function App() {
  const path = window.location.pathname;

  if (path === "/login") return <Login />;
  if (path === "/dashboard") return <Dashboard />;
  if (path === "/duty-board") return <DutyBoard />;
  if (path === "/salary-slip") return <SalarySlip />;
  if (path === "/overtime") return <Overtime />;
  if (path === "/family-pass") return <FamilyPass />;
  if (path === "/leave-apply") return <LeaveApply />;
  if (path === "/incident-report") return <IncidentReport />;
  if (path === "/vehicle-complaint") return <VehicleComplaint />;
  if (path === "/training") return <Training />;
  if (path === "/health-records") return <HealthRecords />;
  if (path === "/pf-loan") return <PFLoan />;
  if (path === "/service-certificate") return <ServiceCertificate />;
  if (path === "/emergency") return <Emergency />;
  if (path === "/profile") return <Profile />;

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Announcements />
      <CTA />
      <Footer />
    </>
  );
}

export default App;