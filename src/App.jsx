import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HooksPage from './pages/HooksPage';
import ConceptsPage from './pages/ConceptsPage';
import UseStateExample from './components/hooks/UseStateExample';
import UseEffectExample from './components/hooks/UseEffectExample';

import './App.css'
import EventHandlingExample from './components/concepts/EventHandlingExample';
import ConditionalRenderingExample from './components/concepts/ConditionalRenderingExample';
import ListRenderingExample from './components/concepts/ListRenderingExample';
import ComponentCompositionExample from './components/concepts/ComponentCompositionExample';
import PropsVsStateExample from './components/concepts/PropsVsStateExample';
import UseContextExample from './components/hooks/UseContextExample';

import RenderizadoCondicional from "./components/others/RenderizadoCondicional";
import ArrayMethodsExample from "./components/others/ArrayMethodsExample";
import ArrayMethodsExample2 from "./components/others/ArrayMethodsExample2";
import ArrayMethodsExample3 from "./components/others/ArrayMethodsExample3";
import ArrayMethodsExample4 from "./components/others/ArrayMethodsExample4";
import ArrayMethodsExample4useRef from './components/others/ArrayMethodsExample4useRef';

const App = () => {
  console.log("App")
  return (
    <Router>
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/hooks">Hooks Examples</Link>
          <Link to="/concepts">Concepts Examples</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />

          <Route path="/hooks/usestate" element={<UseStateExample />} />
          <Route path="/hooks/useeffect" element={<UseEffectExample />} />

          <Route path="/concepts/event-handling" element={<EventHandlingExample />} />
          <Route path="/concepts/conditional-rendering" element={<ConditionalRenderingExample />} />
          <Route path="/concepts/list-rendering" element={<ListRenderingExample />} />
          <Route path="/concepts/component-composition" element={<ComponentCompositionExample />} />
          <Route path="/concepts/props-vs-state" element={<PropsVsStateExample />} /> 
          <Route path="/hooks/usecontext" element={<UseContextExample />} />

          <Route path="/RenderizadoCondicional" element={<RenderizadoCondicional />} />
          <Route path="/ArrayMethodsExample" element={<ArrayMethodsExample />} />
          <Route path="/ArrayMethodsExample2" element={<ArrayMethodsExample2 />} />
          <Route path="/ArrayMethodsExample3" element={<ArrayMethodsExample3 />} />
          <Route path="/ArrayMethodsExample4" element={<ArrayMethodsExample4 />} />
          <Route path="/ArrayMethodsExample4useRef" element={<ArrayMethodsExample4useRef />} />
          

          
        </Routes>
      </>
    </Router>
  );
};

export default App;
