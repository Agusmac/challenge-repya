import React, { useState, useRef } from 'react'
// import styles from '../styles/Home.module.css'


const dummyIDs = [1, 2, 3, 64, 128, 256]

const dummyDatax = [
  {
    clientId: 1,
    document: 42728328,
    email: 'agus@gmail.com',
    action: 'compra',
    observations: 'le fish au chocolat',
    date: '18/09/2022'
  },
  {
    clientId: 2,
    document: 12728328,
    email: 'jesus@gmail.com',
    action: 'consulta',
    observations: 'jadsadasdsdkjasnbdkajsn',
    date: '18/09/2022'
  },
  {
    clientId: 3,
    document: 36728328,
    email: 'messi@gmail.com',
    action: 'llamado',
    observations: 'lorem ipsum generico',
    date: '27/10/2022'
  },

]


export default function Home() {

  // compra,llamado,consulta

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
    if (actionInput[c][v] === '1') {
      alert("Select an option!")
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
  }}



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
            {/* <input type='text' id='action' placeholder="Action" ref={actionInput} /> */}
            <select  ref={actionInput}>
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
      {/* list */}
      <div className='centered width-80 test'>
        {dummyData?.map((item, index) => {
          return (
            <div key={index} className='flex-apart w-full'>
              <p>{item.clientId}</p>
              <p>{item.document}</p>
              <p>{item.email}</p>
              <p>{item.action}</p>
              <p>{item.observations}</p>
              <p>{item.date}</p>
            </div>)
        })}
      </div>
    </>
  )
}
