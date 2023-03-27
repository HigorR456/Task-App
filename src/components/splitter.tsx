import { useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa'

const Splitter = ({ prop, newTask, setNewTask }: any) => {

    const [taskObj, setTaskObj] = useState<any>({...prop})
    const [transitionClass, setTransitionClass] = useState<string>('splitterWrap adding')
    const [input, setInput] = useState<any>({
        task: 0,
        min: 0,
    })
    const [edit, setEdit] = useState<any>()

    const handleDisplayInput = (e: any) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            console.log(e.currentTarget)
            let taskObjSelector = {...taskObj};
            switch (e.currentTarget.id) {
                case 'taskBtn': 
                    taskObjSelector.task = edit;
                    break;
                case 'minBtn':
                    taskObjSelector.minutes = edit;
                    break;
            }
            setTaskObj({...taskObjSelector});
            setInput({task: 0, min: 0,});
        } else {
            switch (e.currentTarget.id) {
                case 'taskBtn': 
                    setInput({task: 1, min: 0,})
                    setEdit(taskObj.task)
                    break;
                case 'minBtn':
                    setInput({task: 0, min: 1,})
                    setEdit(taskObj.minutes)
                    break;
        }
        }
    }

    const handleRemoveTask = () => {
        setTransitionClass('splitterWrap removing');
        setInterval(() => {
            setTaskObj({task: '', });
        }, 150);
        console.log(taskObj.id)
        let removeVar = [...newTask]
        removeVar.map((e: any) => { 
            e.id === taskObj.id ? e.task = '' : console.log('maping')
        })
        setNewTask([...removeVar]);
    }

    if (taskObj.task.length === 0) {
        return (
            <>
            </>
        )
    } else {
        return (
        <>
            <div className={transitionClass}>
                <div className='splitTask'>
                    {input.task === 0 ?
                    <>
                        {taskObj.task}
                        <button id='taskBtn' 
                        onClick={handleDisplayInput}>
                            <FaPen className='editIcon' />
                        </button>
                    </> : 
                    <input 
                    autoFocus 
                    type='text'
                    id='taskBtn'
                    defaultValue={taskObj.task}
                    onKeyDown={handleDisplayInput}
                    onChange={e => setEdit(e.target.value)}></input>}
                </div>

                <div className='splitMin'>
                    {input.min === 0 ? 
                    <>
                        {taskObj.minutes}
                        <button id='minBtn' onClick={handleDisplayInput}>
                            <FaPen className='editIcon' />
                        </button> 
                    </> : 
                    <input 
                    autoFocus 
                    type='time'
                    id='minBtn'
                    defaultValue={taskObj.minutes}
                    onKeyDown={handleDisplayInput}
                    onChange={e => setEdit(e.target.value)}></input>}
                </div>

                <div className='splitBtn'>
                    <button onClick={handleRemoveTask}>
                        <FaTrash className='trashIcon' />
                    </button>
                </div>
            </div>
        </>
        );
    };
}

export default Splitter;