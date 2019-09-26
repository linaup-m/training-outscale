import React from 'react';
import PropTypes from 'prop-types';

import trash from '../assets/icons/trash.svg';
import pencil from '../assets/icons/pencil.svg';

import './Todo.sass';

const Todo = (props) => {

    return (
        <div className="Todo">
            <input type={"checkbox"} className={"Todo__checker"} onClick={_ => props.onCheck(props.todo)}/>
            <div className={`Todo__content ${props.todo.achieved ? 'Todo__content--achieved': ''}`}>
                <span className={`Todo__content__title`}>{props.todo.title}</span>
                <span className={"Todo__content__date"}>Crée le {props.todo.createdAt.format('L HH:mm')}</span>
            </div>
            <span>
                <button disabled={props.todo.achieved} className={"Todo__button"} onClick={_ => props.onEdit(props.todo)}> <img src={pencil}/> </button>
                <button className={"Todo__button"} onClick={_ => props.onDelete(props.todo)}> <img src={trash}/> </button>
            </span>
        </div>
    )

}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Todo;