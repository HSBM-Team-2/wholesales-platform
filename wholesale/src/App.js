import React, { useState } from 'react';
import Registration from './Register';
import Login from './Login';
import WholesalerDashboard from  './WSDB';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState(null); // State to manage user type

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} setUserType={setUserType} />
      ) : (
        <Registration setIsLogin={setIsLogin} />
      )}
      
      <button
        className="p-3 mt-4 shadow rounded transition duration-200"
        onClick={() => setIsLogin(!isLogin)}
      >
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
      
      {/* Render user-specific dashboard based on userType */}
      {userType && (
        <div className="mt-6 p-4 bg-white shadow rounded">
          {userType === 1 && <p>Welcome User!</p>}
          {userType === 2 && <p>Welcome Transport!</p>}
          {userType === 3 &&  <></>}
        </div>
      )}
      
    </div>
    ,<WholesalerDashboard />
  );
}

export default App;
