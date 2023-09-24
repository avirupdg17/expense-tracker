import Card from "./components/UI/Card/Card";
import { ExpenseType } from "./types/ExpenseItemType";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const expenses: ExpenseType[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
export default function App() {
  const [expenseList, setExpenseList] = useState([...expenses]);
  const addExpenseHandler = (expense: ExpenseType) => {
    setExpenseList((prevExpenses: ExpenseType[]) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <Card className=" bg-slate-500 m-2 p-4">
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <ExpenseList expenseList={expenseList} />
    </Card>
  );
}
