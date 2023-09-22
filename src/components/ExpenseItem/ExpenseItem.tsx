import { ExpenseType } from "../../types/ExpenseItemType";
import Card from "../UI/Card/Card";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";
export default function ExpenseItem(props: { item: ExpenseType }) {
  const [title, setTitle] = useState(props.item.title);
  return (
    <Card className="flex items-center mx-1 my-4 p-2 justify-between  bg-slate-600">
      <ExpenseDate expDate={props.item.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="flex-1 mx-2 text-slate-100 text-base">{title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
      <button
        onClick={() => {
          setTitle("Updated!");
          console.log("clicked");
        }}
      >
        Change Title
      </button>
    </Card>
  );
}
