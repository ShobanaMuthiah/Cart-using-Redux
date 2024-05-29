import React from 'react';
import { Provider } from 'react-redux';
// import Display from './Components/Display';
import Update from './Components/Update';
import { store } from './Features/StoreBlock';
const App = () => {
  return (
    <div>
      <h1>Cart List</h1>
      <Provider store={store}>
     
        <Update/>
      </Provider>
      
    </div>
  );
};

export default App;