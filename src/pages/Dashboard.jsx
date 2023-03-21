import React from "react";
import LineChat from "../components/LineChat";
import PieChart from "../components/PieChart";
import "../pages/Dashboard.scss";

const Dashboard = () => {
  return (
    
    <div className="p-3 ">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 " >
          <div className="d-flex justify-content-around py-4 bg-light align-items-center border border-secondary shadow-sm">
          <i className="bi bi-graph-up-arrow fs-1 text-danger"></i>
          <div>
            <p>Increase</p>
            <span>23%</span>
          </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 " >
          <div className="d-flex justify-content-around py-4 bg-light align-items-center border border-secondary shadow-sm">
          <i className="bi bi-currency-dollar fs-1 text-success"></i>
          <div>
            <p>Sales</p>
            <span>234</span>
          </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 " >
          <div className="d-flex justify-content-around py-4 bg-light align-items-center border border-secondary shadow-sm">
          <i className="bi bi-truck fs-1 text-success"></i>
          <div>
            <p>Delivery</p>
            <span>234</span>
          </div>
          </div>
        </div>
        <div className=" col-sm-6 col-md-4 col-lg-3 p-3 " >
          <div className="d-flex justify-content-around bg-light py-4 align-items-center border border-secondary shadow-sm">
          <i className="bi bi-currency-dollar fs-1 text-warning"></i>
          <div>
            <p>Loses</p>
            <span>234</span>
          </div>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-12 col-md-8 p-3">
            <LineChat/>
          </div>
          <div className="col-12 col-md-4 p-3">
            <PieChart/>
          </div>
      </div>


    </div>
    </div>
    
  );
};

export default Dashboard;
