import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserStart } from "./redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";

function Home() {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  return (
  <div className="container" style={{marginTop:'50px'}}>

      <MDBTable>
          <MDBTableHead dark>
              <tr>
                  <th scope="col" > No.</th>
                  <th scope="col" > Name</th>
                  <th scope="col" > Email</th>
                  <th scope="col" > Phone</th>
                  <th scope="col" > Address</th>
                  <th scope="col" > </th>
              </tr>
          </MDBTableHead>
          {users&& users.map((item,index)=>(
              <MDBTableBody key={index}>
                  <tr>
                      <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.mail}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>Edit delete view</td>
                  </tr>
              </MDBTableBody>
          ))}
      </MDBTable>

  </div>
  );
}

export default Home;
