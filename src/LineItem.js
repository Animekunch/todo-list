import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    
      <li className="item">
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <label
          style={item.checked ? { textDecoration: "underline" } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
        <FontAwesomeIcon
          onClick={() => handleDelete(item.id)}
          icon={faTrash}
          role="button"
          tabIndex={0}
          aria-label={`Delete ${item.item}`}
        />
      </li>
  );
};
