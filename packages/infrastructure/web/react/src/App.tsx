import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import _ from 'lodash';

import DefaultLayout from '~/layouts/DefaultLayout';
import UniqueLayout from '~/layouts/UniqueLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (!_.isNil(route.layout)) {
              Layout = route.layout;
            } else if (_.isNull(route.layout)) {
              Layout = UniqueLayout;
            }

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
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
