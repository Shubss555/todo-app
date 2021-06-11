import React, { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = () => {
    const[txt,settxt]=useState('');
    const[data,setdata]=useState([]);

    const add =()=>{
        if(!txt){

        }else{
        setdata([...data,txt]); 
        settxt("");
        }
    }

    const del = (ind) =>{
     const newdata=  data.filter((val,inde)=>{
            return ind!==inde;
        })
        setdata(newdata);
        
    }

    return (
        <>
            <div className="main_div">
            <div className="card">
                <div className="heading">
                    <h1>Todo App</h1>
                </div>
                <div>
                    <div className="todo">
                        <input type="text" onChange={(event)=>settxt(event.target.value)} value={txt}/>
                        {/* <button>+</button> */}
                        <Button className="addbtn"  onClick={add}><AddIcon/></Button>
                    </div>
                    <div>
                    <ol>
                         {data.map((ele,ind)=>{
                             return(
                                 <div key={ind}>
                                  <div className="todo_style">
                                 <li>{ele}  </li>
                                 <Button variant="contained" className="delete_icon" onClick={()=>{del(ind)}}><DeleteIcon/></Button>
                               
                                 </div>
                                 </div>
                                
                             ) 
                         })}
                         </ol>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Todo;