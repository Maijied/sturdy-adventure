import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Badge
} from "reactstrap";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const location = useLocation();
  const user = location.state?.user || {};
  const [posts, setPosts] = useState([]);
  const userPostsApi = `https://dummyjson.com/users/${user.id}/posts`
  
  useEffect(() => {
    axios.get(userPostsApi)
      .then(response => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="content">
        <Row>
        <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={user.image? user.image : 'https://cdn-icons-png.flaticon.com/512/20/20079.png'}
                    />
                    <h5 className="title">{user.firstName ? user.firstName +' '+ user.maidenName +' '+ user.lastName : 'No User Found'}</h5>
                    <h5 className="title">Email: {user.email ? user.email : ' '}</h5>
                  </a>
                  <p className="description">Company: {user.company ? user.company.name:''}</p>
                </div>
               
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
          <Col md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Posts</h6>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                    {posts.map(post => 
                      <tr key={post.id}>
                        <td>
                          <p className="title">{post.title?post.title: ''}</p>
                          <p className="text-muted">
                           {post.body?post.body: ''}
                          </p>
                          {post.tags.map(tag => 
                          <Badge color="default" pill>{tag}</Badge>
                          )}
                        </td>
                      </tr>
                       )}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
