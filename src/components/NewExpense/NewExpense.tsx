import { ExpenseType } from "../../types/ExpenseItemType";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
interface NewExpenseProp {
  onAddExpenseData: (expenseData: ExpenseType) => void;
}

export default function NewExpense(props: NewExpenseProp) {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseType) => {
    const expenseData: ExpenseType = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
