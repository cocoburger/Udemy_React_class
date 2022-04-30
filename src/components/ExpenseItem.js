import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

const ExpenseItem = ( props )  => {
    // function clickedHandler

    let title = props.title;
    const clickHandler = () => {
        title = 'Update';
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
