import React from "react";
import TodoItem from "./TodoItem";


export default function TodoList(props) {
  let todoL=props.todoL;
  if(todoL.length===0){
    return <h1>No tasks!</h1>
  }else{

    return (
      <div className="container mt-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-2">S.No</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
            {/* {todoL.map((item,index)=>{
              return <TodoItem todo={item} indx ={index}/>
            })} */}

            {todoL.map((item,index)=>{
              return <TodoItem todos={item} ind={index} />
            })}


            {/* <TodoItem/> */}
            
        </tbody>
      </table>
    </div>
  );
}

}