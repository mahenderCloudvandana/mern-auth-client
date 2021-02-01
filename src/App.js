import React from 'react';
import Layout from './core/Layout';

const App = () => {
  return (
    <Layout>
    <div className="col-md-6 offset-md-3 text-center">
      <h1 className="p-5">BoilerPlate Created by Mahender Arya</h1>
      <h2>MERN Stack Project</h2>
      <hr />
      <p className="lead">
        A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.
      </p>
    </div>      
    </Layout>
  );
};

export default App;
