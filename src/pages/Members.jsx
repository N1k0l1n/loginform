import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { UserService } from "../services/UserService";

const Members = () => {
  let [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await UserService.getAllUsers();
      setState({
        ...state,
        loading: false,
        users: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  }, []);

  //Delete Method
  let clickDelete = async (userId) => {
    try {
      let response = await UserService.deleteUser(userId);
      if (response) {
        setState({ ...state, loading: true });
        let response = await UserService.getAllUsers();
        setState({
          ...state,
          loading: false,
          users: response.data,
        });
      }
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };

  let { loading, users, errorMessage } = state;

  return (
    <>
      <div className="contact-search p-3">
        <div className="square">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Administrator
                  <Link to="/user/create" className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle mb-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Welcome to the administrator page. This is a secure area that
                  is accessible only to authorized personnel. Here,
                  administrators can access tools and features to manage the
                  website or application, including user management, content
                  creation and moderation, analytics and reporting, and more.
                </p>
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

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="user-list">
            <div className="square">
              <div className="row">
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <div className="col-md-6" key={user.id}>
                        <div className="card my-2">
                          <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-around">
                              <div className="col-md-4">
                                <img
                                  src={user.photo}
                                  alt="user-logo"
                                  className="user-img"
                                />
                              </div>
                              <div className="col-md-7">
                                <ul className="list-group">
                                  <li className="list-group-item list-group-item-action">
                                    Name:{" "}
                                    <span className="fw-bold">{user.name}</span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Mobile:{" "}
                                    <span className="fw-bold">
                                      {user.mobile}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Email:{" "}
                                    <span className="fw-bold">
                                      {user.email}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-1 d-flex flex-column align-items-center">
                                <Link
                                  to={`/user/view/${user.id}`}
                                  className="btn btn-warning my-1"
                                >
                                  <i className="fa fa-eye" />
                                </Link>
                                <Link
                                  to={`/users/edit/${user.id}`}
                                  className="btn btn-primary my-1"
                                >
                                  <i className="fa fa-pen" />
                                </Link>
                                <button
                                  className="btn btn-danger my-1"
                                  onClick={() => clickDelete(user.id)}
                                >
                                  <i className="fa fa-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Members;
