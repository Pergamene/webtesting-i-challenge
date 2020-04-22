module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newEnhancement = item.enhancement === 20 ? item.enhancement : item.enhancement + 1;
  return { 
    ...item,
    enhancement: newEnhancement,
  };
}

function fail(item) {
  let newDurability = item.durability;
  let newEnhancement = item.enhancement;
  if (newEnhancement > 16) {
    newEnhancement--;
  } else if (newEnhancement >= 15) {
    newDurability -= 10;
  } else if (newEnhancement < 15) {
    newDurability -= 5;
  }
  if (newDurability < 0) {
    newDurability = 0;
  }
  return { 
    ...item,
    durability: newDurability,
    enhancement: newEnhancement,
  };
}

function repair(item) {
  return { 
    ...item,
    durability: 100,
  };
}

function get(item) {
  let newName = item.name;
  if (item.enhancement > 0) {
    newName = `[+${item.enhancement}] ${item.name}`;
  }
  return { 
    ...item,
    name: newName,
  };
}
