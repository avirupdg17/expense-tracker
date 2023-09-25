import { useState } from "react";
import ExpenseList from "./components/Expense/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpenses/NewExpense/NewExpense";
import Card from "./components/UI/Card/Card";
import { ExpenseType } from "./types/ExpenseItemType";

const DUMMY_EXPENSES: ExpenseType[] = [
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
  const [expenseList, setExpenseList] = useState([...DUMMY_EXPENSES]);
  const addExpenseHandler = (expense: ExpenseType) => {
    setExpenseList((prevExpenses: ExpenseType[]) => [expense, ...prevExpenses]);
  };
  return (
    <Card className=" bg-slate-500 m-2 p-4">
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <ExpenseList expenseList={expenseList} />
    </Card>
  );
}
