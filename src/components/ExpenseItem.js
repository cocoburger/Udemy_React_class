import './ExpenseItem.css';
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

const ExpenseItem = ( props )  => {
    // function clickedHandler

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Update');
        console.log(title);
    }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
        <button onClick={clickHandler}> 바꾸자 제목 </button>
    </Card>
  );
}

export default ExpenseItem;
