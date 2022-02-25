import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./redux/actions";
import { toast } from 'react-toastify';

const initialstate = {
  name: "",
  mail: "",
  phone: "",
  address: "",
};

function AddEdit() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [form, setform] = useState(initialstate);
  const { name, mail, phone, address } = form;

  const handleSubmit = (e) => {
      e.preventDefault()
      toast.success("User Added Sucessfully ")
      dispatch(createUser(form))
      setTimeout(()=>history.push('/'),500)
  };

  const onChange = (e) => {
    let { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  console.log(form)

  return (
    <div>
      <MDBValidation
        className="row g-3"
        style={{ marginTop: "100px" }}
        onSubmit={handleSubmit}
      >
        <p className="fs-2 fw-boold">Add User Details</p>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          <MDBInput
            value={name}
            name="name"
            type="text"
            onChange={onChange}
            required
            label="Name"
          />
          <br />
          <MDBInput
            value={mail}
            name="mail"
            type="mail"
            onChange={onChange}
            required
            label="E-mail"
          />
          <br />
          <MDBInput
            value={phone}
            name="phone"
            type="number"
            onChange={onChange}
            required
            label="Phone no"
          />
          <br />
          <MDBInput
            value={address}
            name="address"
            type="text"
            onChange={onChange}
            required
            label="Address"
          />
          <br />
        </div>
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            Submit
          </MDBBtn>

          <MDBBtn
            style={{ marginRight: "10px" }}
            color="danger"
            onClick={() => history.push("/")}
          >
            Cancel
          </MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
}

export default AddEdit;
