import React , {useState} from 'react'
import '../App.css';
import {connect} from "react-redux";
import {handleOnSubmitAction} from "../actions/todoAction";

const InputComponent =(props)=>{
    const {todo} = props;
    const {handleOnSubmitAction} = props;
    const [currentItem , setCurrentItem] = useState({
        text : "",
        key : ""
    })

    const handleInputChange = (value)=>{
        setCurrentItem({
            key : Date.now(),
            text : value
        })
    }

    const handleOnClick = async ()=>{
        if(currentItem.text.trim()!="") {
            handleOnSubmitAction(currentItem);
            setCurrentItem({
                text : "",
                key : ""
            })
        }
    }
    return (
        <div>
            <div id="to-do-form">
                <input type="text" placeholder="Enter task" value= {currentItem.text} onChange={(e)=>handleInputChange(e.target.value)}></input>
                <button onClick={handleOnClick} type="submit">Add</button>
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>({
    todo : state.todo
})
export default connect(mapStateToProps , {handleOnSubmitAction})(InputComponent);