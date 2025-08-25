import React from 'react';

// Ícones SVG
const userIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const homeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const settingsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.44.25a2 2 0 0 0-2 0l-.16.09a2 2 0 0 0-2 2v.44a2 2 0 0 1-1 1.73l-.44.25a2 2 0 0 0-1 1.74v.5a2 2 0 0 0 1 1.74l.44.25a2 2 0 0 1 1 1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.44-.25a2 2 0 0 0 2 0l.16-.09a2 2 0 0 0 2-2v-.44a2 2 0 0 1 1-1.73l.44-.25a2 2 0 0 0 1-1.74v-.5a2 2 0 0 0-1-1.74l-.44-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const SideMenu = () => {
  return (
    <aside className="fixed-nav-bar">
      <div className="nav-icon-wrapper active">
        {homeIcon}
      </div>
      <div className="nav-icon-wrapper">
        {userIcon}
      </div>
      <div className="nav-icon-wrapper">
        {settingsIcon}
      </div>
    </aside>
  );
};

export default SideMenu;
