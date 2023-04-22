import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import apolloClient from './lib/apolloClient';

import HomePage from "./pages/index";
import InfoPage from "./pages/info";
import ProjectsPage from "./pages/projects";
import ProjectPage from "./pages/project";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
