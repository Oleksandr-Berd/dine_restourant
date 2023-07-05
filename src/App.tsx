import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/home" element={<SharedLayout/>}/>
          <Route index element={<HomePage />} />
          <Route path='/booking' element={<BookingPage/>}>
        </Route>
        </Routes>
       
    </div>
  );
}

export default App;
