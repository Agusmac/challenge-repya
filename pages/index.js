import React, { useState, useRef } from 'react'
import List from '../components/List'
import { dummyIDs,dummyDatax } from '../dummy'

export default function Home() {

  const [open, setOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [dummyData, setDummyData] = useState(dummyDatax)

  const clientIdInput = useRef();

  const emailInput = useRef();
  const docInput = useRef();
  const actionInput = useRef();
  const obsInput = useRef();


  // shorter 
  const c = 'current';
  const v = 'value'


  // well the name says it all
  function emptier() {
    clientIdInput[c][v] = '';
    emailInput[c][v] = '';
    docInput[c][v] = '';
    actionInput[c][v] = '';
    docInput[c][v] = '';
    setCurrentUser('')
    setOpen(false)
  }


  // pushes new action to the array (sets state again)
  function addAction() {
    if (actionInput[c][v] === '1' ) {
      alert("Select an option!")
    } else if( emailInput[c][v] === '' || docInput[c][v]=== '' || actionInput[c][v]=== '' || obsInput[c][v]=== ''){
      alert("Complete all the fields!")
    }
   
    else {
      
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

      const newAction = {
        clientId: currentUser,
        email: emailInput[c][v],
        document: docInput[c][v],
        action: actionInput[c][v],
        observations: obsInput[c][v],
        date
      }
      setDummyData((prev) => [...prev, newAction])
      emptier()
    }
  }


  // checks if id exists (in the id list) and opens the form div
  function clientCheck() {
    const clientId = parseInt(clientIdInput[c][v])
    const clientExists = dummyIDs.find(id => id === clientId)
    setCurrentUser(clientId)
    if (clientExists) setOpen(true);
    else {
      setOpen(false)
      alert("Client Does not exist")
    }
  }


  return (
    <>
      <h1 className='texcen'>Challenge Agus</h1>
      <div className='centered width-80 flex2 fix'>
        <h4>Add new interaction</h4>
        <input type='text' id='idCheck' placeholder="Client ID" ref={clientIdInput} />
        <div className='addButton' onClick={clientCheck}><div>+</div></div>
      </div>
      {/* form */}
      {open && (
        <div className='centered width-80 '>
          <h4>New interaction</h4>
          <p>User {currentUser}</p>
          <div className='flex'>
            <input required style={{ marginLeft: 0 }} type='email' id='email' placeholder="Email" ref={emailInput} />
            <input required type='text' id='document' placeholder="Document" ref={docInput} />
            <select ref={actionInput}>
              <option value="1" hidden>Choose an action</option>
              <option value="compra">Compra</option>
              <option value="consulta">Consulta</option>
              <option value="llamado">Llamado</option>
            </select>
            <textarea id='observations' rows='2' placeholder="Observations" ref={obsInput}></textarea>
          </div>
          <div className='addAction' onClick={addAction}><div>Add</div></div>
        </div>
      )}
      <List dummyData={dummyData}></List>
    </>
  )
}
