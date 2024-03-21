import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/index';
import HeaderCopoment from './compoments/HeaderCompoment/HeaderCompoment';
import defaultCompoment from './compoments/DefaultCompoment/DefaultCompoment';

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page =route.page
            const Layout = route.isshowheader?defaultCompoment:Fragment
            return(
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              }/>

            )

          })}
        </Routes>
       </Router>      
    </div>
  )
}

export default App;
