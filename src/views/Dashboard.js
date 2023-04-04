import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,Switch, Route } from "react-router-dom";
import UserProfile from "./UserProfile";


function Dashboard(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">User List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Pic</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th >View</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map(user => 
                  <tr key={user.id}>
                    <td class="photo"><img style={{maxWidth:50}} alt="..." src={user.image}/></td>
                    <td>{user.firstName +' '+ user.maidenName +' '+ user.lastName}</td>
                   
                    <td>{user.email}</td>
                  
                    <td>{user.company.name}</td>
                    <td><button type="button" id="tooltip636901683" title="" class="btn btn-link"><Link to={{ pathname: '/admin/user-profile', state: { user } }}><i class="tim-icons icon-badge" style={{color: "white"}}></i></Link></button>
                    <Switch>
                      <Route path="/admin/user-profile" component={UserProfile} />
                    </Switch></td>
                  </tr>
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
