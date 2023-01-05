import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import allRoutes from './routes/index'
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';
import useAuth from './hooks/useAuth';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          {allRoutes.map((route, index) => {
            const Page = route.component
            let Layout = Fragment

            if (!route.layout) Layout = DefaultLayout
            return (
              <Route
                key={index}
                path={route.path}
                element={

                  <Layout>
                    <Page />
                  </Layout>

                }

              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
