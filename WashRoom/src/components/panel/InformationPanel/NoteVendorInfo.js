import React,{ Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default  class NoteVendorInfo extends Component{
  render() {
    return (
      <Form style={{ width: '30%'   }}>
        <h3 className="label-color"> Finance Lease Details</h3>
        <h5  className="label-color"> required filed *</h5>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
        <Label for="exampleEmail" className="mr-sm-2 label-color">Vendor Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="UserName" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2 label-color">Vendor Id</Label>
        <Input type="input" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    );
  }
}