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

var sortedRobots = robots.map(function(bot) {
  if (knownDecepticons.includes(bot['name'])) {
    return Object.assign({}, bot, {"alliance": "decepticon"})
  } else {
    return Object.assign({}, bot, {"alliance": "autobot"})
  }
})

var coloredZebraStripes = zebraStripes.map(function(zebra, index, array) {
  if (index % 2 === 0) {
    return Object.assign({}, zebra, {"color": "black"});
  } else {
    return Object.assign({}, zebra, {"color": "white"});
  }
})
