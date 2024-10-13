import React, { useState } from "react";

const Header = () => {
  const [notificationCount] = useState(3);

  return (
<nav className="header-nav bg-white shadow py-4 px-5">

  <ul className="header-links flex justify-end">
  <div className="notification flex items-center mr-4">
    <span className="bell-icon text-lg text-gray-500">🔔</span> 
    {notificationCount > 0 && <span className="notification-count text-sm text-bold rounded-full px-2 py-1">{notificationCount}</span>}
  </div>
    <li className="mr-4">
      <button className=" shadow p-1.5 rounded transition duration-300 ease-in-out" href="inventory.html">
        Inventory
      </button>
    </li>
    <li className="mr-4">
      <button className=" shadow p-1.5 rounded transition duration-300 ease-in-out" href="orders.html">
        Orders
      </button>
    </li>
    <li className="mr-4">
      <button className=" shadow p-1.5 rounded transition duration-300 ease-in-out" href="messages.html">
        Messages
      </button>
    </li>
    <li>
      <button className=" shadow p-1.5 rounded transition duration-300 ease-in-out" href="profile.html">
        Profile
      </button>
    </li>
  </ul>
</nav>
  );
};

export default Header;
