import React,{ Component } from 'react'
import { Panel } from '@bumaga/tabs'
import LoginForm from './NoteloginForm';

export default class NotePanel extends Component{
  render() {
    return (
      <Panel>
         <LoginForm />
      </Panel>
    );
  }
}