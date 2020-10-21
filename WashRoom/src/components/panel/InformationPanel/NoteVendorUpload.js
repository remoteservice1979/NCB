import React,{ Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default  class NoteServiceInfo extends Component{
  render() {
    return (
      <Form style={{ width: '30%'   }}>
        <h3 className="label-color"> Upload Details</h3>
        <h5  className="label-color"> required filed *</h5>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
        <Label for="exampleEmail" className="mr-sm-2 label-color">Vendor Category</Label>
        <Input type="file" id="file" placeholder="UserName" />
      </FormGroup>
      
    </Form>
    );
  }
}