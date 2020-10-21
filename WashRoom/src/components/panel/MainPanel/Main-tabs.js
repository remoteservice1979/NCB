import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import ContactPanel from './contact-panel';
import NotePanel from './note-panel';

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
        <Tab>Contract File</Tab>

        <Tab>P Note File</Tab>

        <Tab>Pricipal Percentage</Tab>

        <Tab>Rate Changes</Tab>
      </div>

      <div>  <ContactPanel/>   </div>
     
      <div>  <NotePanel/>   </div>
      

      <Panel>
        <p>
          Creates a MotionValue that, when set, will use a spring animation to
          animate to its new state.
        </p>
      </Panel>
    </div>
  </Tabs>
  
  </div>
)
