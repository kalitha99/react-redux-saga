import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserStart } from "./redux/actions";
import { Link } from "react-router-dom";
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
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handelDelete = (id) => {};

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col"> No.</th>
            <th scope="col"> Name</th>
            <th scope="col"> Email</th>
            <th scope="col"> Phone</th>
            <th scope="col"> Address</th>
            <th scope="col"> </th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.mail}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <MDBBtn
                    className="m1"
                    tag="a"
                    color="none"
                    onClick={() => handelDelete(item.id)}
                  >
                    <MDBTooltip title="Delete contact" tag="a">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </MDBBtn>

                  {"  "}

                  <Link to={`/edit/${item.id}`}>
                    <MDBTooltip title="Edit contact" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: "#55acee" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>

                  {"  "}
                  
                  <Link to={`/info/${item.id}`}>
                    <MDBTooltip title="View contact" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: "#3b5998" }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
}

export default Home;
