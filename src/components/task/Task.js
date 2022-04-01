import { useReducer } from "react"

import { AddTask} from "./Addtask"
import { TaskList } from "./TaskList"
 const ACTION_TASK_CREATED='ACTION_TASK_CREATED'
 const ACTION_TASK_UPDATED='ACTION_TASK_UPDATED'
 const ACTION_TASK_REMOVED='ACTION_TASK_REMOVED'

function reducer(state,action){
switch(action.type){
    case ACTION_TASK_REMOVED:
    return state.filter((t)=>t.id !== action.peyload.taskId)

    case ACTION_TASK_CREATED:
    return [...state, action.peyload.task];

    case ACTION_TASK_UPDATED:
        return state.map(t=>{
            if(t.id===action.peyload.task.id){
                return action.peyload.task
            }else{
                return t
            }
        })
    default:throw Error ('unknown action',action.type);

}

}
const initialState=[
    {id:0,text:"My Plan 1", done:false},
    {id:1,text:"My Plan 2", done:false}

]
export const Task=()=>{
 const [tasks,dispatch]=useReducer(reducer,initialState)
 const onTaskUpdate=(updatedTask)=>{
dispatch({
type:ACTION_TASK_UPDATED,
peyload:{
    updatedTask
}


})



 }
 const onTaskRemove=(taskId)=>{// console.log('taskId', taskId)
 dispatch({
      type:ACTION_TASK_REMOVED,
      peyload:{taskId}
       })

}
const onTaskCreate=(newTask)=>{
    console.log('onTaskCreate',) 
    dispatch({
        type:ACTION_TASK_CREATED,
        peyload:{
            task:{
                ...newTask,
                id:tasks.length
            }
        }
    })

}
    return(
        <div className="roe">
  <h2>my plans</h2>
  <h4>tsak manage </h4>
  <hr/>
<AddTask onTaskCreate={onTaskCreate}/>
<TaskList tasks={tasks} onTaskRemove={onTaskRemove}onTaskUpdate={onTaskUpdate}/>
        </div>
    )
}