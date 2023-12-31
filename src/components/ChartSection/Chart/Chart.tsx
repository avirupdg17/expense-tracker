import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";
export default function Chart(props: {
  dataPoints: { label: string; value: number }[];
}) {
  const dataPointvalues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
