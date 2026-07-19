import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import WhiteLabel from './Pages/Features/WhiteLabel'
import AiMastering from './Pages/Features/AiMastering'
import AnalyticsAndReporting from './Pages/Features/Analytics&Reporting'
import DistributionAndDelivery from './Pages/Features/Distribution&Delivery'
import GlobalPayouts from './Pages/Features/GlobalPayouts'
import HelpDeskAndSupport from './Pages/Features/HelpDesk&Support'
import IncomeTracking from './Pages/Features/IncomeTracking'
import RestApi from './Pages/Features/RestApi'
import RoyaltyAccounting from './Pages/Features/RotaltyAccounting'
import SmartLinks from './Pages/Features/SmartLinks'
import SocialMediaManagement from './Pages/Features/SocialMediaManagement'
import AssetManagement from './Pages/Features/AssetManagement'
import Pricing from './Pages/Pricing'
import PlatformDemo from './Pages/Platform-demo'
import RightsManagement from './Pages/Features/RightsManagement'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='whitelabel' element={<WhiteLabel />} />
        <Route path='AiMastering' element={<AiMastering />} />
        <Route path='AnalyticsAndReporting' element={<AnalyticsAndReporting />} />
        <Route path='DistributionAndDelivery' element={<DistributionAndDelivery />} />
        <Route path='GlobalPayouts' element={<GlobalPayouts />} />
        <Route path='HelpDeskAndSupport' element={<HelpDeskAndSupport />} />
        <Route path='IncomeTracking' element={<IncomeTracking />} />
        <Route path='RestApi' element={<RestApi />} />
        <Route path='AssetManagement' element={<AssetManagement />} />
        <Route path='RoyaltyAccounting' element={<RoyaltyAccounting />} />
        <Route path='SmartLinks' element={<SmartLinks />} />
        <Route path='SocialMediaManagement' element={<SocialMediaManagement />} />
        <Route path='Pricing' element={<Pricing />} />
        <Route path='PlatformDemo' element={<PlatformDemo />} />
        <Route path='RightsManagement' element={<RightsManagement />} />
      </Routes>


    </>
  )
}

export default App
