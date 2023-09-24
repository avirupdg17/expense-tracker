import { ExpenseType } from "../../types/ExpenseItemType";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpenseList(props: { expenseList: ExpenseType[] }) {
  return props.expenseList.map((expense) => {
    return (
      <div key={expense.id}>
        <ExpenseItem item={expense} />
      </div>
    );
  });
}
