import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnicalSpecs from './components/TechnicalSpecs';
import DataVisualization from './components/DataVisualization';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FreezeFlyer from './components/FreezeFlyer';
import Applications from './components/Applications';
import ApplicationDetail from './components/ApplicationDetail';
import CustomerOnboarding from './components/CustomerOnboarding';
import EDIInfo from './components/EDIInfo';
import Automation from './components/Automation';
import Bootcamp from './components/Bootcamp';
import BusinessFlow from './components/BusinessFlow';
import AdvancedTraining from './components/AdvancedTraining';
import JiraMSCVP from './components/JiraMSCVP';
import ChatBot from './components/ChatBot';
import Innovations from './components/Innovations';
import GenAI from './components/GenAI';
import IdeaRegister from './components/IdeaRegister';
import Atlas from './components/Atlas';
import ClientVisits from './components/ClientVisits';
import DomainExpertise from './components/DomainExpertise';
import Appreciation from './components/Appreciation';
import AboutAMC from './components/AboutAMC';
import History from './components/History';
import Leaders from './components/Leaders';
import Warehouse from './components/Warehouse';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Documents from './components/Documents';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import FloatingChatBot from './components/FloatingChatBot';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutAMC />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/leaders" element={<Leaders />} />
          <Route path="/about/warehouse" element={<Warehouse />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/freeze-flyer" element={<FreezeFlyer />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:slug" element={<ApplicationDetail />} />
          <Route path="/customer-onboarding" element={<CustomerOnboarding />} />
          <Route path="/edi-info" element={<EDIInfo />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/business-flow" element={<BusinessFlow />} />
          <Route path="/advanced-training" element={<AdvancedTraining />} />
          <Route path="/jira-mscvp" element={<JiraMSCVP />} />
          <Route path="/chat-bot" element={<ChatBot />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/genai" element={<GenAI />} />
          <Route path="/idea-register" element={<IdeaRegister />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/client-visits" element={<ClientVisits />} />
          <Route path="/domain-expertise" element={<DomainExpertise />} />
          <Route path="/appreciation" element={<Appreciation />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:platform/:courseId" element={<CourseDetail />} />
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <TechnicalSpecs />
              <DataVisualization />
              <Sustainability />
              <Contact />
            </main>
          } />
        </Routes>
        <Footer />
        <FloatingChatBot />
      </div>
    </Router>
  );
}

export default App;