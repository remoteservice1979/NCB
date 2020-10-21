import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import LoginForm from './NoteloginForm';
import VendorPanel from './NoteVendorInfo';
import NoteServiceInfo from './NoteServiceInfo';
import NoteVendorUpload from './NoteVendorUpload';

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

export default () => (
  <div className="out-border">
  <Tabs>
    <div className='tabs'>
      <div className='tab-list'>
        <Tab>User Information</Tab>

        <Tab>Vendor Information </Tab>

        <Tab>Service</Tab>

        <Tab>Uplpoad Profile</Tab>
      </div>
      <Panel>
        <LoginForm />
      </Panel>
      <Panel>
      <VendorPanel />
      </Panel>
      <Panel>
      <NoteServiceInfo />
      </Panel>
      <Panel>
      <NoteVendorUpload />
      </Panel>
    </div>
  </Tabs>
  
  </div>
)
