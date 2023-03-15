import React from 'react'
import "../pages/Dashboard.css"

const Dashboard = () => {
  return (
    <>
    <div className="inner">
    <nav id="nav">
      <div className="nav__container--logo">
        <div className="logo">W</div>
        <h1>WasteBank</h1>
      </div>

      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Customer</li>
        <li>Category</li>
        <li>Transaction</li>
        <li>Pick-up</li>
        <li>Stock</li>
        <li>Financial</li>
        <li>Raport</li>
      </ul>
    </nav>

    <div className="menu">
      <div className="line"></div>
    </div>

    <main>
      <div className="main__col--1">
        <h2>Overview</h2>
      </div>

      <div className="main__col--2">
        <div className="box box--1">
          <div className="box--logo">
            <span
              className="iconify"
              data-inline="false"
              data-icon="fluent:people-32-filled"
            ></span>
          </div>
          <div className="box--content">
            <p className="box--title">Customer</p>
            <p className="box--number">1,300</p>
          </div>
        </div>

        <div className="box box--2">
          <div className="box--logo">
            <span
              className="iconify"
              data-inline="false"
              data-icon="clarity:group-line"
            ></span>
          </div>
          <div className="box--content">
            <p className="box--title">Employees</p>
            <p className="box--number">42</p>
          </div>
        </div>

        <div className="box box--3">
          <div className="box--logo">
            <span
              className="iconify"
              data-inline="false"
              data-icon="ant-design:cloud-download-outlined"
            ></span>
          </div>
          <div className="box--content">
            <p className="box--title">Request</p>
            <p className="box--number">128</p>
          </div>
        </div>
      </div>

      <div className="main__col--3">
        <div className="graphic--container">
          <h3>Customer based region</h3>
          <img src="https://i.ibb.co/gd1vQTz/img.png" alt="illustration" />
        </div>
        <div className="recap--number">
          <h5>Total category waste</h5>
          <span>20</span>
          <h5>Total waste in</h5>
          <span>564 kg</span>
          <h5>Total waste out</h5>
          <span>1205 kg</span>
        </div>
      </div>
    </main>

    <aside>
      <div className="card--container">
        <div className="card--container-up">
          <p className="number-card">ID 122 887 552</p>
        </div>
        <div className="card--container-down">
          <p>Your balance</p>
          <span className="balance">$ 2,920</span>
        </div>
      </div>

      <div className="transaction--container">
        <h3>Last Transaction</h3>

        <div className="transaction">
          <div className="logo-grow">
            <span
              className="iconify"
              data-inline="false"
              data-icon="akar-icons:arrow-up-left"
            ></span>
          </div>
          <div className="transaction--infos">
            <h6>Deposit Waste</h6>
            <p>Hotel Garden</p>
          </div>
        </div>
        <div className="transaction translate">
          <div className="logo-grow">
            <span
              className="iconify"
              data-inline="false"
              data-icon="akar-icons:arrow-up-left"
            ></span>
          </div>
          <div className="transaction--infos">
            <h6>Deposit Waste</h6>
            <p>Plastic Factory</p>
          </div>
        </div>
        <div className="transaction">
          <div className="logo-grow">
            <span
              className="iconify"
              data-inline="false"
              data-icon="akar-icons:arrow-up-left"
            ></span>
          </div>
          <div className="transaction--infos">
            <h6>Deposit Waste</h6>
            <p>Hotel Garden</p>
          </div>
        </div>
      </div>
    </aside>
  </div>
  </>
  )
}

export default Dashboard
