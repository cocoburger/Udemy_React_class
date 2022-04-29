import ExpenseItem from './components/ExpenseItem';
import Expense from "./components/Expense";
import React from "react";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },

    ]
    /**
     * 3개의 인자를 받는다.
     * 1. component
     * 2. props
     * 3. children
     * 아래 코드를 통해 알 수 있는 것은 wrapper가 필요하다.
     * div안에 h2, 커스텀한 Expense 컴포넌트가 children이다. 즉, div가 wrapper이다.
     * 만약에 h2,expense 컴포넌트가 div의 children 변수가 아니면, 화면에 아무것도 출력되질 않고,
     * grey색 화면만 보일 것이다.
     *  예시코드)
     *   React.createElement('h2', {}, '>Let\'s get started!'),
     *   React.createElement(Expense, {data:expenses})
     */
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, '>Let\'s get started!'),
    //     React.createElement(Expense, {data:expenses})
    // );

  return (
      <div>
          <h2>Let's get started!</h2>
          <Expense data={expenses}/>
      </div>
  );
}

export default App;
