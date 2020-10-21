import React, { Component } from 'react';
import {
  Container,Col, Row, Button, Form, FormGroup, Label, Input, FormText, Card
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './input-form.css';

class InputForm extends Component {
  render() {
    return (
      <Container className="App">
      <Form>
        <Row>
        <Col xs="12" sm="12" md="12" lg="4">
        <FormGroup row>
          <Label className="label-color" for="LeasingCompany" xs={6} sm={6} md={6}>Leasing Company Name</Label>
          <Col  sm={6} md={6} xs={6}>
            <div style={{ display: 'flex'}}>
              <div>
            <Input type="email" name="email" id="LeasingCompany" placeholder="Select Leasing Company" />
              </div>
              <div>
              <Link to={'/userInfo'} className="nav-link">
              <span className="glyphicon glyphicon-plus-sign label-color"></span> 
              </Link>
              </div>
            </div>
          </Col>
           
		  </FormGroup>
		<FormGroup row>
		
          <Label className="label-color" for="LeasingCompany" xs={6} sm={6} md={6}>File Name</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="email" name="email" id="LeasingCompany" placeholder="Select Leasing Company" />
          </Col>
		 </FormGroup >
		 <FormGroup row>
          <Label className="label-color" for="LeasingCompany" xs={6} sm={6} md={6}>Pool ID</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="email" name="email" id="LeasingCompany" placeholder="Select Leasing Company" />
          </Col>
        </FormGroup>  
        </Col>
        <Col xs="12" sm="12" md="12" lg="4">
        <FormGroup row>
        <Label className="label-color" for="checkbox2" xs={6} sm={6} md={6}>Checkbox</Label>
          <Col sm={6} md={6} xs={6}>
            <FormGroup check>
            <div style={{ display: 'flex'}}>
               <div>
                <Input type="checkbox" id="checkbox2" />{' '}
                </div>
                <div>
              <Label  style= {{ paddingLeft: '22px' }}className="label-color" check>
              
              Real Estate
              </Label>
            </div>
            </div>
		    </FormGroup>
        
			 <FormGroup check>
       <div style={{ display: 'flex'}}>
               <div>
                <Input type="checkbox" id="checkbox2" />{' '}
                </div>
                <div>
              <Label  style= {{ paddingLeft: '22px' }}className="label-color" check>
              
              Monthly Files
              </Label>
            </div>
            </div>
            </FormGroup>
          </Col>
		  </FormGroup >
		 <FormGroup row>
          <Label className="label-color" for="cutofdate" xs={6} sm={6} md={6}>Deal Date</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="text" name="email" id="cutofdate" placeholder="with a placeholder" />
          </Col>  
		   </FormGroup >
		    <FormGroup row>
          <Label className="label-color" for="cutofdate" xs={6} sm={6} md={6}>Data Sheet</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="text" name="email" id="cutofdate" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        </Col>
        <Col xs="12" sm="12" md="12" lg="4">
        <FormGroup row>
          <Label className="label-color" for="cutofdate" xs={6} sm={6} md={6}>Cut of Date</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="text" name="email" id="cutofdate" placeholder="with a placeholder" />
          </Col>
		</FormGroup>
		<FormGroup row>
          <Label className="label-color" for="cutofdate" xs={6} sm={6} md={6}>Remarks</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="text" name="email" id="cutofdate" placeholder="with a placeholder" />
          </Col>
		</FormGroup>
		<FormGroup row>
          <Label className="label-color" for="exampleText" xs={6} sm={6} md={6}>Remarks</Label>
          <Col xs={6} sm={6} md={6}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        </Col>
      </Row>
      </Form>
	  
	  <Row>
	    <Col xs={12} sm={12} md={12}  lg={4}>
		   <FormGroup >
			<Col>
			  <Button style={{ width: '100%' }}>Destination Planning</Button>
			 </Col>
			 <Col>
			<Card  style={{ height: '200px'}}>
			  
			</Card>
			</Col>
			</FormGroup>
		</Col>
		 <Col xs={12} sm={12} md={12}  lg={4}>
	
		<FormGroup>
	    <Col >
          <Button style={{ width: '100%' }}>Source Field</Button>
		 </Col>
		 <Col>
		<Card  style={{ height: '200px'}}>
		  
		</Card>
		</Col>
		</FormGroup>
		</Col>
	 <Col  xs={12} sm={12} md={12}  lg={4}>
	  <FormGroup>
	    <Col xs={12} sm={12} md={12}  lg={12}>
          <Button style={{ width: '100%' }}>Computed</Button>
		 </Col>
		 <Col xs={12} sm={12} md={12}  lg={12}>
		<Card  style={{ height: '200px'}}>
		  
		</Card>
		</Col>
		</FormGroup>
	</Col>
	  </Row>
	  
	  

      </Container>
    );
  }
}

export default InputForm;
