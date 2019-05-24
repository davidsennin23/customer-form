import React from 'react';
import './App.css';
import GenericForm from './components/form/GenericForm';
import DataContainer from './components/data-toggle/DataContainer';

function App() {
  return (
    <div className="App">
      <DataContainer>
        <GenericForm></GenericForm>
      </DataContainer>
      
    </div>
  );
}

export default App;
