import React from 'react';
import Navbar from './components/Navbar';
import Alertmessage from './components/Alertmessage';
import Accountdetails from './components/Accountdetails';
import Accountdetailmobileview from './components/Accountdetailmobileview';
import './App.css';

function App() {
  
  return (
    <div className='pb-8'>
<><Navbar />
    <Alertmessage />
    <div className='hidden md:block'>
    <Accountdetails/>
    </div>
    <div className='md:hidden'>
<Accountdetailmobileview/>
    </div>
    </>
    </div>
    
  );
}

export default App;
