import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={task.id}>
            {i + 1}. {task.text}
            <FontAwesomeIcon icon={faTrashCan} />
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
