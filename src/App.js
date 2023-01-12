import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/expenseform/ExpenseForm";
import Expenses from "./components/expenses/Expenses";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Yryskeldi",
      year: 20,
    },
    {
      id: 2,
      name: "Akbar",
      year: 30,
    },
    {
      id: 3 ,
      name: "Kurmanjan",
      year: 70,
    },
    {
      id: 4,
      name: "Nurbolot",
      year: 90 ,
    },
  ]);
  const addNewExpenseHandler = (data) => {
    const upDatedUsers = [...users];
    upDatedUsers.push(data);
    setUsers(upDatedUsers);
  };
users.sort((a, b) => {
  return b.year - a.year
})
  return (
    <div className="apps">
      <div className="items">
        <ExpenseForm onNewExpenseAdd={addNewExpenseHandler}/>
        <Expenses expenses={users} />
      </div>
    </div>
  );
}

export default App;
