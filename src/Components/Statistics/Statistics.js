import PropTypes from "prop-types";

export default function Statistics({ states, total, percentage }) {
  return (
    <>
      {Object.keys(states).map((i) => (
        <p key={i}>
          {i}: {states[i]}
        </p>
      ))}
      <p>Total : {total}</p>
      <p>Percentage: {percentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  states: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
