import { ReactNode } from "react";

const Card = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`shadow-xl shadow-slate-200 card rounded-xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default Card;
