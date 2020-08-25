const Rankingseed = require('../components/RankingsF.json');
const players2 = Rankingseed.map((player) => {
  return {
    Rank: `${player.rank}`,
    Name: `${player.displayName}`,
    Position: `${player.position}`,
    Team: `${player.team}`,
  };
});

export default players2;
