import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";

const AddUser = () => {
  let navigate = useNavigate();

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

  //Data Binding
  let updateInput = (event) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  //User Creation
  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await UserService.createUser(state.user);
      if (response) {
        navigate("/members", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate("/user/create", { replace: false });
    }
  };

  let { loading, user, errorMessage } = state;

  return (
    <>
      <div className="add-user p-3">
        <div className="square">
          <div className="row">
            <div className="col">
              <p className="h4 text-succes fw-bold">Create User</p>
              <p className="fst-italic">
                1-Look for the "Create" button or link, and click on it.
                <br />
                2-Fill out the form with the provided information. You will
                typically be asked for a full name, email address, and a mobile
                number.
                <br />
                3-You may also be asked for additional information such as the
                company, title, and group. Fill out these fields as requested.
                <br />
                4-Once you have filled out all required fields, click the
                "Create Account" button.
                <br />
                5-Congratulations, you have successfully created a new user
                account! You can now login and seeing the created user at the
                members page.
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
                    value={user.name}
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
                    value={user.photo}
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
                    className="btn btn-success"
                    value="Create"
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
  );
};

export default AddUser;
