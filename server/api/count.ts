let counter = 0;

export default () => {
  counter++;

  if (counter > 5) {
    counter = 0;
  }

  return JSON.stringify(counter);
};
