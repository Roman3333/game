import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const PuffinsGamePage = lazy(() => import('@/Pages/PuffinsGame'));
const AbstractEcoPage = lazy(() => import('@/Pages/AbstractEco'));
const AuthPage = lazy(() => import('@/Pages/Auth'));
const PuffinsRashPage = lazy(() => import('@/Pages/PuffinRush'));
import { PuffinsLayout } from '@/widgets/Layouts/PuffinsLayout';

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<PuffinsLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="puffins" element={<PuffinsGamePage />} />
          <Route path="abstract-eco" element={<AbstractEcoPage />} />
          <Route path="rush" element={<PuffinsRashPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
