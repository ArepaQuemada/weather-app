import React, { useState } from 'react';
import 'weather-icons/css/weather-icons.css'
import Header from './Components/Header';

export const DataContext = React.createContext('');

function App() {
  
  const [data, setData] = useState('');
  
  return (
    <div>
      <DataContext.Provider value={[ data, setData ]}>
        <Header />
      </DataContext.Provider>
    </div>
  );
}

export default App;
