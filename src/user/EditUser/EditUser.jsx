import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { UserService } from "../../services/UserService";

const EditUser = () => {
  let navigate = useNavigate();
  let { userId } = useParams();

  let [state, setState] = useState({
    loading: false,
    user: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      group: "",
    },
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
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

  //Making an Update (fill the fields)
  let updateInput = (event) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  //Update Functionality
  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await UserService.updateUser(state.user, userId);
      if (response) {
        navigate("/members", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/users/edit/${userId}`, { replace: false });
    }
  };

  let { loading, user, errorMessage } = state;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <pre>{JSON.stringify(user)}</pre>
          <div className="add-user p-3">
            <div className="square">
              <div className="row">
                <div className="col">
                  <p className="h4 text-primary fw-bold">Edit User</p>
                  <p className="fst-italic">
                    1-Login to your user account on the website or platform
                    where you want to make changes.
                    <br />
                    2-Look for a "Settings" or "Account" button or link, and
                    click on it.
                    <br />
                    3-Locate the section where you can edit the user
                    information. This could be under the "Pen" icon or a similar
                    label.
                    <br />
                    4-Make the necessary changes to the information, such as the
                    name, email address, mobile, or other details.
                    <br />
                    5-Once you have made your desired changes, click the "Save"
                    or "Update" button to save the changes.
                    <br />
                    6-Congratulations, you have successfully edited the user
                    account! Your updated information should now be reflected on
                    the members Page.
                    <br />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="name"
                        value={user?.name}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="photo"
                        value={user?.photo}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Photo Url"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="mobile"
                        value={user.mobile}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="email"
                        value={user.email}
                        onChange={updateInput}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="company"
                        value={user.company}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Company"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="title"
                        value={user.title}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Title"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="group"
                        value={user.group}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Group"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Update"
                      />
                      <Link to="/members" className="btn btn-danger ms-2">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditUser;
