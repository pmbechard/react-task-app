import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { tasks, onDelete, onEdit, onSubmitTask, editing } = props;

  return (
    <ul>
      {tasks.map((task, i) => {
        if (editing !== task) {
          return (
            <li key={task.id}>
              {i + 1}. {task.text}
              <FontAwesomeIcon
                icon={faPen}
                onClick={(e) => onEdit(e, task.id)}
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={(e) => onDelete(e, task.id)}
              />
            </li>
          );
        } else {
          return (
            <li key={task.id}>
              {i + 1}.
              <input type='text' placeholder={task.text} />
              <FontAwesomeIcon
                icon={faCircleCheck}
                onClick={(e) => onSubmitTask(e)}
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={(e) => onDelete(e, task.id)}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Overview;
