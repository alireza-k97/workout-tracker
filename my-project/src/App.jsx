// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import WorkoutForm from './components/form';
import Navbar from './components/navbar'
 
function App() {
   return(
    <div dir='rtl'>
      <Navbar />
      <WorkoutForm />
    </div>
  );
}

export default App;

