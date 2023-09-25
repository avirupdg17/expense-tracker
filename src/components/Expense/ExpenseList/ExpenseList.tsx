import { useState } from "react";

import "./ExpenseList.css";
import { ExpenseType } from "../../../types/ExpenseItemType";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpenseList(props: { expenseList: ExpenseType[] }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 && (
        <p className="expenses-list__fallback">No Expenses Found! </p>
      )}
      <ul>
        {filteredExpenses.map((expense) => (
          <ExpenseItem item={expense} key={expense.id} />
        ))}
      </ul>
    </Card>
  );
}
