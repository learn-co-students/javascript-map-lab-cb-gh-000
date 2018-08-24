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
let sortedRobots = robots.map(element => {
  let allianceType = "";
  if(knownDecepticons.includes(element.name)) {
    allianceType = "decepticon"
  } else {
    allianceType = "autobot";
  }
  return Object.assign({}, element, {
    alliance: allianceType
  });
})

let coloredZebraStripes = zebraStripes.map((element, index) => {
  let color = "";
  if (index % 2 === 0) {
    color = "black";
  } else {
    color = "white";
  }
  return Object.assign({}, element, {
    color: color
  })
});