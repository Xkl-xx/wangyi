/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Homepage from '@/views/Homepage.jsx';
// eslint-disable-next-line import/no-unresolved
import LazyComponent from '@/components/LazyComponent.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LazyComponent path="Layout" />}>
        <Route index element={<Homepage />} />
        <Route path="Ranking" element={<LazyComponent path="Ranking" />} />
        <Route path="Mine" element={<LazyComponent path="Mine" />} />
        <Route path="Interest" element={<LazyComponent path="Interest" />} />
        <Route path="Community" element={<LazyComponent path="Community" />} />
      </Route>
      <Route path="Search" element={<LazyComponent path="Search" />} />
      <Route path="Login" element={<LazyComponent path="Login" />} />
    </Routes>
  );
}
