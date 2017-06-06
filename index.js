const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null },
];

const sortedRobots = robots.map((robot) => {
  const updatedRobot = Object.assign({}, robot);

  if (knownDecepticons.includes(robot.name)) {
    Object.assign(updatedRobot, { alliance: 'decepticon' });
  } else {
    Object.assign(updatedRobot, { alliance: 'autobot' });
  }

  return updatedRobot;
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
  const updatedStripe = Object.assign({}, stripe);

  if (index % 2 === 0) {
    Object.assign(updatedStripe, { color: 'black' });
  } else {
    Object.assign(updatedStripe, { color: 'white' });
  }

  return updatedStripe;
});
