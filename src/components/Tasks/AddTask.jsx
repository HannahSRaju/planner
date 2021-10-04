import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotesIcon from '@mui/icons-material/Notes';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from '@mui/material';

const AddTask = ({ close, submit }) => {
    const inputStyle = { color: "var(--tcolor)" };
    const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() < 9 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-${new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()}`;
    const currentTime = `${Date().substring(16, 24)}`;
    const [task, setTask] = useState({
        title: "",
        description: "",
        date: currentDate,
        time: currentTime,
        done: false
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const submitTask = (e) => {
        e.preventDefault();
        submit(task);
        setTask(() => {
            return {
                title: "",
                description: "",
                date: currentDate,
                time: currentTime,
                done: false
            }
        })
    }
    return (
        <div className="task-add">
            <div className="task-add-box">
                <div className="task-add-box-topbar">
                    <div className="task-add-box-topbar__close" onClick={close}>
                        <CloseIcon />
                    </div>
                </div>
                <form className="task-add-box-form" onSubmit={submitTask}>
                    <div className="task-add-box-form__content">
                        <div className="task-add-box-form__group">
                            <label className="task-add-box-form__label" htmlFor="title" />
                            <Input type="text" className="task-add-box-form__input" id="title" name="title" placeholder="Enter title" style={{ ...inputStyle, fontSize: "1.25rem" }} value={task.title} onChange={handleChange} />
                        </div>
                        <div className="task-add-box-form__group">
                            <label className="task-add-box-form__label" htmlFor="description">
                                <NotesIcon />
                            </label>
                            <Input type="text" className="task-add-box-form__input" id="description" name="description" placeholder="Enter description" style={inputStyle} value={task.description} onChange={handleChange} />
                        </div>
                        <div className="task-add-box-form__group">
                            <label className="task-add-box-form__label" htmlFor="date">
                                <EventNoteIcon />
                            </label>
                            <Input type="date" className="task-add-box-form__input" id="date" name="date" placeholder={currentDate} style={inputStyle} value={task.date} onChange={handleChange} />
                        </div>
                        <div className="task-add-box-form__group">
                            <label className="task-add-box-form__label" htmlFor="type">
                                <AccessTimeIcon />
                            </label>
                            <Input type="time" className="task-add-box-form__input" id="time" name="time" placeholder={currentTime} style={inputStyle} value={task.time} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="task-add-box__buttons">
                        <div className="task-add-box__button">
                            <Button variant="text" className="task-add-box__button-cancel" onClick={close}>Cancel</Button>
                        </div>
                        <div className="task-add-box__button">
                            <Button variant="contained" className="task-add-box__button-save" type="submit">Save</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
