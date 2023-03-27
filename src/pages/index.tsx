import { useState, useEffect } from 'react'

import Splitter from '../components/splitter'
import Header from '../components/header'
import Footer from '../components/footer'

import {BiPlus} from 'react-icons/bi'

export default function Home() {
  const [theme, setTheme] = useState({
    fontFamily: 'sans-serif',
    '--bg-primary': 'white',
    '--bg-secondary': 'rgba(0, 0, 0, 0.5)',
    '--bg-tertiary': 'rgb(200, 200, 200)',
    '--text-primary': 'white',
    '--input-text': 'black',
    '--secondary': 'white',
    '--input-alert-text': 'red',
  '--input-alert-bg': 'rgb(255, 230, 230)',}
  );

  const [taskInput, setTaskInput] = useState<any>({
    task: '',
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
      minutes: e.target.type === 'time' ? e.target.value : taskInput.minutes,
      id: new Date().getTime()
    })
  }
  
  const handleAddTask = () => {
    if (taskInput.task.length === 0) {
      setInputAlert({class: 'inputAlert', ph: 'Type something'})
    } else {
      setTaskInput({
        task: taskInput.task,
        minutes: taskInput.minutes,
        id: new Date().getTime()
      })
      setNewTask([...newTask, {...taskInput}]);
      setInputAlert({class: '', ph: 'Task'})
      console.log(newTask)
    }
  }

  useEffect(() => {
    localStorage.setItem('newTask', JSON.stringify(newTask))
  }, [newTask]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('newTask'));
    if (storage) {
      setNewTask(storage);
    }
  }, [])

  return (
    <div id='indexWrap' style={theme}>
      <Header setTheme={setTheme} />


      <div className='appWrap'>
        <div className='taskIncrementWrap'>
            <div className='incrementTask'>
                <input 
                className={inputAlert.class} 
                placeholder={inputAlert.ph} type='text' 
                onChange={handleOnChange}></input>
            </div>

            <div className='incrementMin'>
                <input 
                type='time' 
                onChange={handleOnChange}></input>
            </div>

            <div className='buttonWrap'>
              <button onClick={handleAddTask}>
                <BiPlus className='plusIcon' />
              </button>
            </div>
        </div>

        {newTask.map((e:any , index: number) => {
          const result = <Splitter key={e.id} prop={e} newTask={newTask} setNewTask={setNewTask} className={index/2 === 0 ? 'toggleBg' : ''} />;
          return result;
        })}
      </div>

      <Footer />
    </div>
  )
}
