const switchWorkers = (workers, index) => {
  const newWorkers = [...workers];
  const tmp = newWorkers[index];
  newWorkers[index] = newWorkers[index + 1];
  newWorkers[index + 1] = tmp;
  return newWorkers;
};

export default switchWorkers;
