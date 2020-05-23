import React from 'react';
import Layout from './components/Layout/Layout.component'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component'

function App() {
  return (
    <div>
      <Layout>
       <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;

//finished 19 