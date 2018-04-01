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

var sortedRobots = robots.map(rebot => {
  let isDecepticon = knownDecepticons.includes(rebot.name)
  return Object.assign({}, rebot, {
     alliance: isDecepticon? 'decepticon' : 'autobot'
  })
})

const coloredZebraStripes = zebraStripes.map((stripe, index) => {
  let isEven = (index => {return index%2 === 0 })(index)
  return Object.assign({}, stripe, {
    color: isEven ? 'white': 'black'
  })
})
