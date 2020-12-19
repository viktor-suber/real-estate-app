import React from "react";

const Header: React.FC = ({ children }) => {
  return (
    <header className="navbar navbar-expand pt-3">
        <div className="container-fluid">
          {children}
        </div>
    </header>
  );
};

export default Header;
