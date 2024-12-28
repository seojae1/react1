import React,{Component} from "react";
import"./Expense.css";
import{MdDelete} from 'react-icons/md';
import Expenseitem from "./Expenseitem";

//export class ExpenseList extends Component{
    const ExpenseList = (props) =>{
   // {handleDelete,initialExpense}
   const { initialExpense, handleDelete, handleEdit, clearItem } = props;
        console.log(props.initialExpense)
        return(
            <>
            <ul className="list">
                {/*ExpenseItem*/}
                {props.initialExpense.map(expense =>{
                    return(
                        <Expenseitem 
                        expense={expense}
                        key={expense.id}
                        handleDelete={props.handleDelete}
                        handleEdit={props.handleEdit}
                      
                        />
                    )
                })}
                
                
            </ul>
            {
             initialExpense.length >0 &&( 
                        
           <button className="btn" onClick={clearItem}>목록지우기
              <MdDelete className="btn-icon"/>
                </button>)
            }
          
            </>
        )
    }
 
export default ExpenseList