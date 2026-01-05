/*
 *  --------------------------------------------------------------------------
 *   TECHITHON 2026 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani
 *   
 *   Contributors: Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */

import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

import { Home } from './components/Home';
import { ProjectsSection } from './components/ProjectSection';

import './styles.css';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HashRouter>
      <div className="app-wrapper">
        <Navbar onGetTickets={openModal} />
        
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/projects" element={
              // Wrapper to ensure background consistency for the projects page
              <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#050510' }}>
                  <ProjectsSection />
              </div>
          } />
        </Routes>

        <Footer />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </HashRouter>
  );
};

export default App;