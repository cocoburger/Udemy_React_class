import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "./UI/Card";

const  Expense = (props) => {
    const item = props?.data;
    return (
        <Card className="expenses">
            {item.map(item => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}/>
            ))}
        </Card>
    )
}

export default Expense