import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicOnlyRoute } from './components/protected-routes.tsx';
import { UserProvider } from './contexts/user-provider.tsx';
import NavLayout from './layouts/nav-layouts.tsx';
import Login from './pages/account/login.tsx';
import Home from './pages/home/home.tsx';
import SignUp from './pages/signup.tsx';
// Pages import added

import WhatWeDo from './pages/about-us/what/what.tsx';
import WhoWeAre from './pages/about-us/who/who.tsx';
import Classes from './pages/our-programs/classes/classes.tsx';
import Freecyclery from './pages/our-programs/freecyclery/freecyclery.tsx';
import FTWNB from './pages/our-programs/FTWNB/FTWNB.tsx';
import OpenShop from './pages/our-programs/openshop/openshop.tsx';
import ContributeFinancially from './pages/support-us/contribute-financially/contribute-financially.tsx';
import DonateABike from './pages/support-us/donate-a-bike/donate-a-bike.tsx';
import DonateTime from './pages/support-us/donate-time/donate-time.tsx';
import OurSupporters from './pages/support-us/our-supporters/our-supporters.tsx';
import UploadPage from './pages/upload/Upload.tsx';
import UploadHours from './pages/upload/UploadHours.tsx';
import UploadPeople from './pages/upload/UploadPeople.tsx';

import './App.css';
import AuthCallback from './pages/account/auth-callback.tsx';
import EmailVerification from './pages/account/email-verifcation.tsx';
import RequestPasswordReset from './pages/account/request-password-reset.tsx';
import ResetPassword from './pages/account/reset-password.tsx';
import NotFound from './pages/not-found.tsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />} />

            <Route element={<PublicOnlyRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgot-password" element={<RequestPasswordReset />} />
            </Route>
            <Route path="auth/callback" element={<AuthCallback />} />
            <Route path="auth/reset-password" element={<ResetPassword />} />
            <Route path="auth/verify-email" element={<EmailVerification />} />
            {/* Protected Route for Upload Page */}
            <Route path="/upload/:id" element={<UploadPage />} />
            <Route path="/uploadpeople/:id" element={<UploadPeople />} />
            <Route path="/uploadhours/:id" element={<UploadHours />} />

            {/*
              Account
            */}
            {/*
              About Us
            */}
            <Route path="about-us">
              <Route path="what" element={<WhatWeDo />} />
              <Route path="who" element={<WhoWeAre />} />
            </Route>
            {/*
              Our Programs
            */}
            <Route path="our-programs">
              <Route path="classes" element={<Classes />} />
              <Route path="freecyclery" element={<Freecyclery />} />
              <Route path="ftwnb" element={<FTWNB />} />
              <Route path="openshop" element={<OpenShop />} />
            </Route>

            {/*
              Support Us
            */}
            <Route path="support-us">
              <Route path="contribute-financially" element={<ContributeFinancially />} />
              <Route path="donate-a-bike" element={<DonateABike />} />
              <Route path="our-supporters" element={<OurSupporters />} />
              <Route path="donate-time" element={<DonateTime />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
