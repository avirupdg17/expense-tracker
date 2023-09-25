import Card from "../../UI/Card/Card";
import "./ExpenseDate.css";
export function ExpenseDate(props: { expDate: Date }) {
  const month = props.expDate.toLocaleString("en-us", { month: "long" });
  const year = props.expDate.getFullYear();
  const day = props.expDate.toLocaleString("en-us", { day: "2-digit" });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}
