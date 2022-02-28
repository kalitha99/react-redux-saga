import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "./redux/actions";
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
  const {id} = useParams()
  const {users} = useSelector(state=>state.data)

  const [form, setform] = useState(initialstate);
  const [edit,setEdit] = useState(false)
  const { name, mail, phone, address } = form;


  useEffect(()=>{
    if(id){
      setEdit(true)
      const singleUser = users.find(item=>item.id===Number(id))
      setform({...singleUser})
    } else{
      setEdit(false)
      setform({...initialstate})
    }
  },[id])



  const handleSubmit = (e) => {
      e.preventDefault()
      if(!edit){
        toast.success("User Added Sucessfully ")
        dispatch(createUser(form))
        setTimeout(()=>history.push('/'),500)
      }else{
        
        dispatch(updateUser({id,form}))
        setEdit(false)
        toast.success("User Updated Sucessfully ")
        setTimeout(()=>history.push('/'),500)
      }
    

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
        <p className="fs-2 fw-boold">{!edit?'Add User Details':'Edit User Details'}</p>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          <MDBInput
            value={name || ''}
            name="name"
            type="text"
            onChange={onChange}
            required
            label="Name"
          />
          <br />
          <MDBInput
            value={mail || ''}
            name="mail"
            type="mail"
            onChange={onChange}
            required
            label="E-mail"
          />
          <br />
          <MDBInput
            value={phone || ''}
            name="phone"
            type="number"
            onChange={onChange}
            required
            label="Phone no"
          />
          <br />
          <MDBInput
            value={address || ''}
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
