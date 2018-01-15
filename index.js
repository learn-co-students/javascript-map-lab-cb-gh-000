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

const sortedRobots = robots.map( robot => {
  if ( knownDecepticons.includes(robot.name) ) {
    return Object.assign({}, robot, {
      alliance: 'decepticon'
    })
  } else {
    return Object.assign({}, robot, {
      alliance: 'autobot'
    })
  }
})

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

const coloredZebraStripes = zebraStripes.map( (stripe, i) => {
  if ( (i % 2) === 0 ) // even
    return Object.assign({}, stripe, {
      color: 'black'
    })
  return Object.assign({}, stripe, {
    color: 'white'
  })

})
