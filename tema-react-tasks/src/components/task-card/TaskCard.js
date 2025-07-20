import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";
import "./TaskCard.css";

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DateContainer dueDate={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
