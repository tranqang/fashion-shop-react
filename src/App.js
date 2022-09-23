import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {routes.map(route => {
            const { path, element } = route;
            const Layout = route.layout || DefaultLayout;
            return (
              <Route
                key={path}
                path={path}
                element={<Layout>{element}</Layout>}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
