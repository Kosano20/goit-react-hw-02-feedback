import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ states, onFeedback }) {
  return (
    <>
      {Object.keys(states).map((i) => (
        <button
          key={i}
          type="button"
          className={styles.btn}
          onClick={() => {
            onFeedback(i);
          }}
        >
          {i}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  states: PropTypes.object.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
