import React,{ Component } from 'react';
import { Panel } from '@bumaga/tabs';
import InputForm from './InputForm';

export default class ContactPanel extends Component{
  render() {
    return (
      <Panel>
         <InputForm />
      </Panel>
    );
  }
}