import React from 'react';
import { 
Dashboard, Lead, Home, Contact, Account, Deal, Task, Meetings, 
Call, Reports, Analytics, Services, Products, Role, Activity, Campaign, Email, Quote, Profile, Settings, Logout} from '../components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/lead" element={<Lead/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/deal" element={<Deal/>} />
        <Route path="/task" element={<Task/>} />
        <Route path="/meetings" element={<Meetings/>} />
        <Route path="/call" element={<Call/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/role" element={<Role/>} />
        <Route path="/activity" element={<Activity/>} />
        <Route path="/campaign" element={<Campaign/>} />
        <Route path="/email" element={<Email/>} />
        <Route path="/quote" element={<Quote/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter