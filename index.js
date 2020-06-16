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

const sortedRobots = robots.map(robot => {
  const isDecepticon = knownDecepticons.includes(robot.name);
  return Object.assign({}, robot, {
    alliance: isDecepticon ? 'decepticon' : 'autobot'
  });
});

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

const coloredZebraStripes = zebraStripes.map((stripe, index) => {
  const isEven = (index % 2) === 0;
  return Object.assign({}, stripe, {
    color: isEven ? 'black' : 'white'
  });
});