
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
const Page1 = React.lazy(() => import('../pages/Page1'))
const Page2 = React.lazy(() => import('../pages/Page2'))

function AppIntraTEA() {

  return (
    <Suspense>
    <h1>AppIntraTEA</h1><hr /><br />
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  </Suspense>
  )
}

export default AppIntraTEA