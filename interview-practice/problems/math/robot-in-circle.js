/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const visitedPoints = new Set(['0-0']);

  let currentPoint = [0, 0];
  let deltaX = 0;
  let deltaY = 1;

  for (let i = 1; i <= 5; i++) {
    for (const inst of instructions) {
      [deltaX, deltaY, currentPoint] = getNextPoint(
        deltaX,
        deltaY,
        currentPoint,
        inst
      );
      const serialized = serializePoint(currentPoint);
      if (!visitedPoints.has(serialized)) {
        if (i === 5) return false;
        visitedPoints.add(serialized);
      }
    }
  }

  return true;
};

const serializePoint = ([x, y]) => `${x}-${y}`;
const deserializePoint = str => {
  const [xString, yString] = str.split('-');
  return [parseInt(xString, 10), parseInt(yString, 10)];
};
const getNextPoint = (deltaX, deltaY, [x, y], inst) => {
  const goingUp = deltaX === 0 && deltaY === 1;
  const goingLeft = deltaX === -1 && deltaY === 0;
  const goingDown = deltaX === 0 && deltaY === -1;
  const goingRight = deltaX === 1 && deltaY === 0;

  if (inst === 'G') {
    return [deltaX, deltaY, [x + deltaX, y + deltaY]];
  }

  if (inst === 'L') {
    if (goingUp) return [-1, 0, [x, y]];
    if (goingLeft) return [0, -1, [x, y]];
    if (goingDown) return [1, 0, [x, y]];
    if (goingRight) return [0, 1, [x, y]];
  }

  if (inst === 'R') {
    if (goingUp) return [1, 0, [x, y]];
    if (goingLeft) return [0, 1, [x, y]];
    if (goingDown) return [-1, 0, [x, y]];
    if (goingRight) return [0, -1, [x, y]];
  }
};

console.log('\n');
console.log(isRobotBounded('GGLLGG'));
console.log(isRobotBounded('GG'));