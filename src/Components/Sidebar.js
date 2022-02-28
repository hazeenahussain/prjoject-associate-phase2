import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar(props) {
    return (
        <div>
           {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  {/* <a href="#" className="brand-link"> */}
  <Link to ="/" className="brand-link">
    <img src="dist/img/logo ict.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Associate Panel</span>
  {/* </a> */}
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/ict1.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        {/* <a href="#" className="d-block">WELCOME Admin</a> */}
        <Link to ="/" className="d-block">WELCOME ASSOCIATE</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
        <Link to ="/" className="nav-link active"><i className="nav-icon fas fa-tachometer-alt" />
            <p>HOME <i className="right fas fa-angle-left" />
            </p>
            </Link>
          {/* <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              HOME
              <i className="right fas fa-angle-left" />
            </p>
          </a> */}
          <ul className="nav nav-treeview">
            <li className="nav-item">
              {/* <a href="./index.html" className="nav-link active"> */}
              <Link to ="/Associatehome" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Associate Home</p>
                </Link>
              {/* </a> */}
            </li>
            {/* <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li> */}
          </ul>
        </li>
        {/* ....hall booking */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              HALL BOOKING
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">           
            
            <li className="nav-item">
            <Link to ="/Bookhall" className="nav-link active">
              {/* <a href="pages/forms/validation.html" className="nav-link"> */}
                <i className="far fa-circle nav-icon" />
                <p>Book a Hall</p>
              {/* </a> */}
              </Link>
            </li>
          </ul>
        </li>
        {/* ....associate.. */}
        {/* <li className="nav-item">
        <Link to ="/Associates" className="nav-link "> */}
          {/* <a href="pages/widgets.html" className="nav-link"> */}
            {/* <i className="nav-icon fas fa-th" />
            <p>
              ASSOCIATES
              <span className="right badge badge-danger">New</span>
            </p>
            </Link> */}
          {/* </a> */}
        {/* </li> */}
        {/* .......calender */}
        <li className="nav-item">
          {/* <a href="pages/calendar.html" className="nav-link"> */}
          <Link to ="/Bookings" className="nav-link ">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              VIEW BOOKING
              <span className="badge badge-info right">2</span>
            </p>
          {/* </a> */}
          </Link>
        </li>
        {/*  */}
        
       
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tree" />
            <p>
              LOGOUT
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

        </div>
    );
}

export default Sidebar;