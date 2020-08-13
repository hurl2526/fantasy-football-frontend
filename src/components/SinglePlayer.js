import React from 'react';

const SinglePlayer = (props) => {
  const {
    displayName,
    overallRank,
    position,
    team,
    _id: id,
  } = props.player;
  return (
    <tr key={id}>
      <td key={id}>{overallRank}</td>
      <td>{displayName}</td>
      <td>{position}</td>
      <td>{team}</td>
    </tr>
  );
};

// BlogItem.propType = {
//   onDelete: PropTypes.func,
//   onUpdate: PropTypes.func,
//   blog: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       author: PropTypes.string,
//       subject: PropTypes.string,
//       article: PropTypes.string,
//       _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     })
//   ),
// };

export default SinglePlayer;
