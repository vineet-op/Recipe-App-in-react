import { useState } from 'react';
import './App.scss';
import Header from './componenets/Header';
import RecipeLists from './componenets/RecipeLists';
import Tabs from './componenets/Tabs';

function App() {

  const [loader, setLoader] = useState(true)
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists setLoader={setLoader} />

      {loader &&
        <div className='loader'>
          <div className='spinner'></div>
        </div>}

    </div>
  );
}

export default App;
