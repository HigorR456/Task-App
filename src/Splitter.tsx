import { useState } from 'react';
import {SplitterContent} from './styles/styled'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Splitter = ({ prop }: any) => {

    const [taskObj, setTaskObj] = useState<any>({...prop})
    const [transitionClass, setTransitionClass] = useState<string>('splitterWrap adding')
    const [input, setInput] = useState<any>({
        task: 0,
        start: 0,
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
                case 'startBtn':
                    taskObjSelector.start = edit;
                    break;
                case 'minBtn':
                    taskObjSelector.minutes = edit;
                    break;
            }
            setTaskObj({...taskObjSelector});
            setInput({task: 0, start: 0, min: 0,});
        } else {
            switch (e.currentTarget.id) {
                case 'taskBtn': 
                    setInput({task: 1, start: 0, min: 0,})
                    break;
                case 'startBtn':
                    setInput({task: 0, start: 1, min: 0,})
                    break;
                case 'minBtn':
                    setInput({task: 0, start: 0, min: 1,})
                    break;
        }
        }
    }

    const handleRemoveTask = () => {
        setTransitionClass('splitterWrap removing');
        setInterval(() => {
            setTaskObj({task: '', });
        }, 150);
    }

    if (taskObj.task.length === 0) {
        return (
            <>
            </>
        )
    } else {
        return (
        <SplitterContent>
            <div className={transitionClass}>
                <div className='splitTask'>
                    {input.task === 0 ?
                    <>
                        {taskObj.task}
                            <button id='taskBtn' 
                            onClick={handleDisplayInput}>
                                <FontAwesomeIcon className='editIcon' icon={faPenToSquare} />
                            </button>
                    </> : 
                    <input 
                    autoFocus 
                    type='text'
                    id='taskBtn'
                    onKeyDown={handleDisplayInput}
                    onChange={e => setEdit(e.target.value)}></input>}
                </div>

                <div className='splitStart'>
                    {input.start === 0 ? 
                    <>
                        {taskObj.start}
                        <button id='startBtn' onClick={handleDisplayInput}>
                            <FontAwesomeIcon className='editIcon' icon={faPenToSquare} />
                        </button>
                    </> : 
                    <input 
                    autoFocus 
                    type='time'
                    id='startBtn'
                    onKeyDown={handleDisplayInput}
                    onChange={e => setEdit(e.target.value)}></input>}
                </div>

                <div className='splitMin'>
                    {input.min === 0 ? 
                    <>
                        {taskObj.minutes}
                        <button id='minBtn' onClick={handleDisplayInput}>
                            <FontAwesomeIcon className='editIcon' icon={faPenToSquare} />
                        </button> 
                    </> : 
                    <input 
                    autoFocus 
                    type='number'
                    id='minBtn'
                    onKeyDown={handleDisplayInput}
                    onChange={e => setEdit(e.target.value)}></input>}
                </div>

                <div className='splitBtn'>
                    <button onClick={handleRemoveTask}>
                        <FontAwesomeIcon className='trashIcon' icon={faTrash} />
                    </button>
                </div>
            </div>
        </SplitterContent>
        );
    };
}

export default Splitter;