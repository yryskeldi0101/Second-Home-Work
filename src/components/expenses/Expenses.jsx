import React from "react";
import ExpenseItem from "../expenseitem/ExpenseItem";
import "./Expense.css"

const Expenses = ({ expenses }) => {
  return (
    <ul className="ul-list">
      {expenses.map((elem,index) => {
        return (
          <ExpenseItem
            name={elem.name}
            year={elem.year}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
