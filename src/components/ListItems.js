import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import {connect} from "react-redux";
import {deleteItemAction, updateItemAction} from "../actions/todoAction";

const ListItems = (props) => {
    const {todo} = props;
    const items = todo.items;
    const {deleteItemAction , updateItemAction} = props;




    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    updateItemAction({text : e.target.value, key : item.key})
                }}/>
                <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            deleteItemAction(item.key)
        }} icon="trash"/>
        </span>
            </p>
        </div>
    })
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>

    </div>;
}

const mapStateToProps = (state)=>({
    todo : state.todo
})
export default connect(mapStateToProps , {updateItemAction , deleteItemAction})(ListItems);