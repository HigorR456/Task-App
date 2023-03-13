import { useState } from 'react';
import Splitter from './Splitter';
import {createGlobalStyle} from 'styled-components';
import {AppContent} from './styles/styled'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
*font-family: sans-serif;
`

function App() {

  const [taskInput, setTaskInput] = useState<any>({
    task: '',
    start: '',
    minutes: '',
    id: 0,
  })
  const [newTask, setNewTask] = useState<Array<object>>([])
  const [inputAlert, setInputAlert] = 
    useState<{class: string; ph: string}>
    ({class: '', ph: 'Task'});

  const handleOnChange = (e: any) => {
    setTaskInput({
      task: e.target.type === 'text' ? e.target.value : taskInput.task,
      start: e.target.type === 'time' ? e.target.value : taskInput.start,
      minutes: e.target.type === 'number' ? e.target.value : taskInput.minutes,
      id: new Date().getTime()
    })
  }
  
  const handleAddTask = () => {
    if (taskInput.task.length === 0) {
      setInputAlert({class: 'inputAlert', ph: 'Type something'})
    } else {
      setTaskInput({
        task: taskInput.task,
        start: taskInput.start,
        minutes: taskInput.minutes,
        id: new Date().getTime()
      })
      setNewTask([...newTask, {...taskInput}]);
      setInputAlert({class: '', ph: 'Task'})
    }
  }

  return (
    <>
      <GlobalStyle />

      <AppContent>
        
        <div className='taskIncrementWrap'>
            <div className='incrementTask'>
                <input className={inputAlert.class} placeholder={inputAlert.ph} type='text' onChange={handleOnChange}></input>
            </div>

            <div className='incrementStart'>
                <input placeholder='07:30' type='time' onChange={handleOnChange}></input>
            </div>

            <div className='incrementMin'>
                <input placeholder='30' type='number' onChange={handleOnChange}></input>
            </div>

            <div className='buttonWrap'>
              <button onClick={handleAddTask}>
                <FontAwesomeIcon className='plusIcon' icon={faPlus} />
              </button>
            </div>
        </div>

          {newTask.map((e:any , index: number) => {
            const result = <Splitter key={e.id} prop={e} className={index/2 === 0 ? 'toggleBg' : ''} />;
            return result;
          })}
        </AppContent>

    </>
  )
}

export default App
