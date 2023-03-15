import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Members = () => {
  return (
    <>
      <div className="contact-search p-3">
        <div className="square">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Administrator
                  <Link to={"/users/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle mb-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic"> ifsigfisefnisfisnfisfins</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    <div className="user-list">
      <div className="square">
          <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center d-flex justify-content-around">
                      <div className="col-md-4">
                      <FaUser/>
                      </div>
                      <div className="col-md-7">
                          <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                              Name: <span className="fw-bold">Flamur</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Mobile: <span className="fw-bold">0655959595</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Email: <span className="fw-bold">flamur@test.com</span>
                            </li>
                          </ul>
                      </div>
                      <div className="col-md-1 d-flex flex-column align-items-center">
                          <Link to={`/users/view/1`} className="btn btn-warning my-1">
                            <i className="fa fa-eye"/>
                          </Link>
                          <Link to="/users/view/1" className="btn btn-primary my-1">
                            <i className="fa fa-pen"/>
                          </Link>
                          <button className="btn btn-danger my-1">
                            <i className="fa fa-trash"/>
                          </button>
                      </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Members;
