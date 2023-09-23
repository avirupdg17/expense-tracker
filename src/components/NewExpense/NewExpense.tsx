import { ExpenseType } from "../../types/ExpenseItemType";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export default function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseType) => {
    const expenseData: ExpenseType = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
