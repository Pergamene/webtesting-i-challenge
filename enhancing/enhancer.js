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
  let newEnhancement = item.enhancement;
  if (newEnhancement > 16) {
    newEnhancement--;
  } else if (newEnhancement > 15) {
    newEnhancement -= 10;
  } else {
    newEnhancement -= 5;
  }
  if (newEnhancement < 0) {
    newEnhancement = 0;
  }
  return { 
    ...item,
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
  if (item.durability > 0) {
    newName = `[+${item.enhancement}]${newName}`;
  }
  return { 
    ...item,
    name: newName,
  };
}
