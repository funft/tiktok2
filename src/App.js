import { Link, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout'
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, i) => {
          const Layout = route.layout === null ? Fragment : (route.layout || DefaultLayout)
          const Page = route.component

          return <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
