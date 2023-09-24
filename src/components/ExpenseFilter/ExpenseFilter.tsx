import { ChangeEvent } from "react";
import "./ExpenseFilter.css";
interface expenseFilterProp {
  selected: string;
  onChangeFilter: (filterYear: string) => void;
}
const ExpenseFilter = (props: expenseFilterProp) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
