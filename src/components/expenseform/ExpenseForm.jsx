import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/forminput/FormInput";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const enabled = name.length > 0 && year.length > 0;
  const saveHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      name,
      year,
    };
    props.onNewExpenseAdd(expenseDate);
    setName("");
    setYear("");
     };
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const yearInputChangeHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <form className="form">
      <FormInput
        id="name"
        labelName="Name:"
        inputType="text"
        placeholder="Your Name"
        value={name}
        onChange={nameInputChangeHandler}
      />

      <FormInput
        labelName="Your age:"
        inputType="number"
        id="year"
        value={year}
        onChange={yearInputChangeHandler}
      />
      <div className="button_div">
        <Button title="ADD" value={name} disabled={!enabled} onClick={saveHandler}/>
      </div>
    </form>
  );
};

export default ExpenseForm;
