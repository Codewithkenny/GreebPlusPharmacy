import React from "react";
import { Link } from "react-router-dom";
import './Breadcrumbs.css'

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className="separator">/</span>}
          {link.to ? <Link to={link.to}>{link.label}</Link> : <span>{link.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
