import React from 'react';

const SinglePlayer = (props) => {
  const { displayName, overallRank, position, positionRank,team, _id:id } = props.player;
  return (
    <div
      //key={blog.objectId} if not destructuring
      // className='ui card'
      // style={{ width: '75%', padding: '20px' }}
    >
      <tr>
  <td>{overallRank}</td>
      <td>{displayName}</td>
      <td>{position}</td>
      <td>{team}</td>
    </tr>
      {/* <div className='content'>
        <div className='Name'>{displayName}</div>
        <br />
        <div className='meta'>Position: {position}</div>
        <br />
        <div className='meta'>positionRank: {positionRank}</div>
        <br />
        <div className='meta'>overallRank: {overallRank}</div>
        <br />
        <div className='meta'>Team: {team}</div>
        <hr />
      </div> */}
      {/* <div>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onDelete(id);
          }}
        >
          Delete
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate(id);
          }}
        >
          Update
        </Button>
      </div> */}
    </div>
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