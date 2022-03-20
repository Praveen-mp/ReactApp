// import React from 'react';
// import { Media } from 'reactstrap';
// import SearchField from "react-search-field";
// import { MDBCol } from "mdbreact";
// import { MDBIcon } from "mdbreact";
// import { Button } from 'reactstrap';
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="primary" light expand="md" >
//           <NavbarBrand href="/" className="NavCol"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
//           className="img1" alt="" width="10" height="15"/></NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//               <MDBCol md="6" className="search" >
//            <input className="form-control" type="text" placeholder="Search" aria-label="Search" 
//           style={{ paddingRight :50,paddingLeft:11}}
         
//            />
//            </MDBCol>
//            <MDBIcon icon="search" />
//               </NavItem>
//               <NavItem>
//               <Button color="light" onClick={() => clickMe()} style={{fontFamily:10}}>primary</Button>{' '}
//               </NavItem>
//               <NavItem>
                
//               </NavItem>
              
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//         <div>
//         <Container>
//         <Row>
//           <Col>
//           <div>
//       <Card>
//         <CardImg top width="10%" 
//         src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Card image cap" />
       
//       </Card>
      
//     </div>
//           </Col>

//           <Col>
//           <Card>
//         <CardImg top width="10%" 
//         src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Card image cap" />
       
//       </Card>
//           </Col>
//           <Col>.col</Col>
//           <Col>.col</Col>
//         </Row>
//         </Container>
        
//     </div>
//       </div>
      
//     );
//     function clickMe(){
//       <Form>
//       <FormGroup>
//         <Label for="exampleEmail">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="examplePassword">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelect">Select</Label>
//         <Input type="select" name="select" id="exampleSelect">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleSelectMulti">Select Multiple</Label>
//         <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Input>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleText">Text Area</Label>
//         <Input type="textarea" name="text" id="exampleText" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleFile">File</Label>
//         <Input type="file" name="file" id="exampleFile" />
//         <FormText color="muted">
//           This is some placeholder block-level help text for the above input.
//           It's a bit lighter and easily wraps to a new line.
//         </FormText>
//       </FormGroup>
//       <FormGroup tag="fieldset">
//         <legend>Radio Buttons</legend>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option one is this and that—be sure to include why it's great
//           </Label>
//         </FormGroup>
//         <FormGroup check>
//           <Label check>
//             <Input type="radio" name="radio1" />{' '}
//             Option two can be something else and selecting it will deselect option one
//           </Label>
//         </FormGroup>
//         <FormGroup check disabled>
//           <Label check>
//             <Input type="radio" name="radio1" disabled />{' '}
//             Option three is disabled
//           </Label>
//         </FormGroup>
//       </FormGroup>
//       <FormGroup check>
//         <Label check>
//           <Input type="checkbox" />{' '}
//           Check me out
//         </Label>
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//     }
//   }
// }