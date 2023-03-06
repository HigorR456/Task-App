import { useState } from 'react';
import {SplitterContent} from './styles/styled'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Splitter = ({ prop }: any) => {

    const [taskObj, setTaskObj] = useState<any>({...prop})
    const [transitionClass, setTransitionClass] = useState<string>('splitterWrap adding')

    const handleRemoveTask = (e: any) => {
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
                    {taskObj.task}
                </div>

                <div className='splitStart'>
                    {taskObj.start}
                </div>

                <div className='splitMin'>
                    {taskObj.minutes}
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