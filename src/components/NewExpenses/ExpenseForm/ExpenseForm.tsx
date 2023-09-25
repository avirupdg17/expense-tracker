import { FormEvent, ChangeEvent, useState } from "react";
import "./ExpenseForm.css";
import { ExpenseType } from "../../../types/ExpenseItemType";

interface NewExpenseProp {
  onSaveExpenseData: (expenseData: ExpenseType) => void;
}

export default function ExpenseForm(props: NewExpenseProp) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const newItem: ExpenseType = {
      ...formData,
      amount: parseInt(formData.amount),
      date: new Date(formData.date),
    };
    props.onSaveExpenseData(newItem);
  };
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            name="title"
            id="title"
            value={formData.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            onChange={inputChangeHandler}
            name="amount"
            id="amount"
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            id="date"
            value={formData.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}
