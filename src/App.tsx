
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { About, Careers, Contact, PrivacyPolicy, CareerApply, LogisticsBlog, LogisticsBlog2, LogisticsBlog3, ProductionBlog1, ProductionBlog2, ProductionBlog3, MediaBlog1, MediaBlog2, MediaBlog3, RetailBlog1, RetailBlog2, RetailBlog3, EdTechBlog1, EdTechBlog2, EdTechBlog3, HealthcareBlog1, HealthcareBlog2, HealthcareBlog3, FinTechBlog1, FinTechBlog2, FinTechBlog3, TelecomBlog1, TelecomBlog2, TelecomBlog3 } from './components/pages';
import Hero from './components/sections/Hero';
import FAQ from './components/sections/FAQ';
import Products from './components/sections/Products';
import { 
  Logistics, Manufacturing, Media, Retail, EdTech, Ecommerce, 
  Healthcare, EnergyUtilities, FinTech, Telecommunications, 
  RealEstateConstruction, Cloud, ExReality, Web3, MVPDevelopment, 
  BackEnd, DevOps, ESG, ITServices, DataAI, Automation, 
  SoftwareCloud, EnterpriseApps, Cybersecurity 
} from './components/services';
import { NextGenSolutions, SolutionsTailored, ReadyToUnlock } from './components/features';
import RootLayout from './components/layout/RootLayout';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NextGenSolutions />
      <SolutionsTailored />
      <ITServices />
      <FAQ />
      <ReadyToUnlock />
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Careers/Apply" element={<CareerApply />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/Production-and-Supply-Chain" element={<Manufacturing />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/Edtech" element={<EdTech />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Energy-and-Utilities" element={<EnergyUtilities />} />
        <Route path="/Fintech" element={<FinTech />} />
        <Route path="/Telecommunication" element={<Telecommunications />} />
        <Route path="/RealEstate-and-Construction" element={<RealEstateConstruction />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/Ex-Reality" element={<ExReality />} />
        <Route path="/Web3" element={<Web3 />} />
        <Route path="/Mvp" element={<MVPDevelopment />} />
        <Route path="/Back-End" element={<BackEnd />} />
        <Route path="/Devops" element={<DevOps />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ESG" element={<ESG />} />
        <Route path="/Data-AI" element={<DataAI />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/Software-Cloud" element={<SoftwareCloud />} />
        <Route path="/Enterprise-Apps" element={<EnterpriseApps />} />
        <Route path="/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Blog/Logistics-Smart-Solutions" element={<LogisticsBlog />} />
        <Route path="/Blog/Logistics-Tech-Enhancements" element={<LogisticsBlog2 />} />
        <Route path="/Blog/Logistics-Advanced-Tech" element={<LogisticsBlog3 />} />
        <Route path="/Blog/Production-AI-Supply-Chain" element={<ProductionBlog1 />} />
        <Route path="/Blog/Production-Sustainable-Manufacturing" element={<ProductionBlog2 />} />
        <Route path="/Blog/Production-Inventory-Optimization" element={<ProductionBlog3 />} />
        <Route path="/Blog/Media-Content-AI" element={<MediaBlog1 />} />
        <Route path="/Blog/Media-Immersive-Experiences" element={<MediaBlog2 />} />
        <Route path="/Blog/Media-Data-Driven" element={<MediaBlog3 />} />
        <Route path="/Blog/Retail-Seamless-Integration" element={<RetailBlog1 />} />
        <Route path="/Blog/Retail-Digital-Transformation" element={<RetailBlog2 />} />
        <Route path="/Blog/Retail-Scalable-Marketing" element={<RetailBlog3 />} />
        <Route path="/Blog/EdTech-AI-Learning" element={<EdTechBlog1 />} />
        <Route path="/Blog/EdTech-Cloud-Platforms" element={<EdTechBlog2 />} />
        <Route path="/Blog/EdTech-Learning-Impact" element={<EdTechBlog3 />} />
        <Route path="/Blog/Healthcare-Technology-Trends" element={<HealthcareBlog1 />} />
        <Route path="/Blog/Healthcare-Operational-Excellence" element={<HealthcareBlog2 />} />
        <Route path="/Blog/Healthcare-Data-Driven" element={<HealthcareBlog3 />} />
        <Route path="/Blog/Energy-Utilities-Transformation" element={<div className='min-h-screen bg-white'><div className='max-w-4xl mx-auto p-8'>Energy & Utilities Transformation – coming soon.</div></div>} />
        <Route path="/Blog/Energy-Utilities-Smart-Meters" element={<div className='min-h-screen bg-white'><div className='max-w-4xl mx-auto p-8'>Smart Meters – coming soon.</div></div>} />
        <Route path="/Blog/Energy-Utilities-Renewables" element={<div className='min-h-screen bg-white'><div className='max-w-4xl mx-auto p-8'>Renewables – coming soon.</div></div>} />
        <Route path="/Blog/FinTech-Trends-Innovations" element={<FinTechBlog1 />} />
        <Route path="/Blog/FinTech-AI-Big-Data" element={<FinTechBlog2 />} />
        <Route path="/Blog/FinTech-Blockchain-Beyond" element={<FinTechBlog3 />} />
        <Route path="/Blog/Telecom-Data-Analytics" element={<TelecomBlog1 />} />
        <Route path="/Blog/Telecom-Big-Data" element={<TelecomBlog2 />} />
        <Route path="/Blog/Telecom-Decision-Impact" element={<TelecomBlog3 />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;