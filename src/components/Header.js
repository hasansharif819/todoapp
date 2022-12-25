import React from 'react';
import notes from '../images/notes.png';
import plus from '../images/plus.png';
import tick from '../images/double-tick.png';
import { useState } from 'react';
import {added, allCompleted, clearCompleted} from '../redux/todos/actions';
import { useDispatch } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput('');
    }

    const completeAllHandler = () => {
        dispatch(allCompleted());
    }

    const clearHandler = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
                <img
                    src={notes}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 
                            bg-[url(${plus})]
                        /></form>
                             bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer"
                onClick={completeAllHandler}
                >
                    <img
                        className="w-4 h-4"
                        src={tick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer"
                onClick={clearHandler}
                >Clear completed</li>
            </ul>
        </div>
    )
}
