import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { UserService } from "../../services/UserService";

const ViewUser = () => {
  let { userId } = useParams();

  let [state, setState] = useState({
    loading: false,
    users: {},
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await UserService.getUser(userId);
      setState({
        ...state,
        loading: false,
        user: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  }, [userId]);

  let { loading, user, errorMessage } = state;

  return (
    <>
      <div className="view-user-intro p-3">
        <div className="square">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">User Details</p>
              <p className="fst-italic">
                Welcome to the user details page. Here, you can find all the
                important information about the user, including their name,
                company, mobile, and contact information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* //Card */}
          <div className="view-user mt-3">
            <div className="square">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src={user?.photo} alt="user-logo" className="user-img" />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Name: <span className="fw-bold">{user?.name}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile: <span className="fw-bold">{user?.mobile}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Email: <span className="fw-bold">{user?.email}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Title: <span className="fw-bold">{user?.title}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Company: <span className="fw-bold">{user?.company}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Group: <span className="fw-bold">{user?.group}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/members" className="btn btn-warning">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewUser;
