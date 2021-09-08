// exports function that generates random numbers and letters(package dependency added)
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
