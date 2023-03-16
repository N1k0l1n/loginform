import React from "react";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <>
      <div className="add-user p-3">
        <div className="square">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit User</p>
              <p className="fst-italic">
                1-Login to your user account on the website or platform where
                you want to make changes.
                <br />
                2-Look for a "Settings" or "Account" button or link, and click
                on it.
                <br />
                3-Locate the section where you can edit the user information.
                This could be under the "Pen" icon or a similar label.
                <br />
                4-Make the necessary changes to the information, such as the
                name, email address, mobile, or other details.
                <br />
                5-Once you have made your desired changes, click the "Save" or
                "Update" button to save the changes.
                <br />
                6-Congratulations, you have successfully edited the user
                account! Your updated information should now be reflected on the
                members Page.
                <br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Select a Group..</option>
                  </select>
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
  );
};

export default EditUser;
