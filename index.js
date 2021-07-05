const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const sortedRobots = robots.map(robot => {
  const robotCopy = Object.assign({}, robot);
  const isDecepticon = knownDecepticons.indexOf(robotCopy.name) > -1;
  robotCopy.alliance = isDecepticon ? 'decepticon' : 'autobot';
  return robotCopy;
});

const coloredZebraStripes = zebraStripes.map((zebra, index) => {
  const zebraCopy = Object.assign({}, zebra);
  const isEven = index % 2 === 0
  zebraCopy.color = isEven? 'black': 'white';
  return zebraCopy;
});
