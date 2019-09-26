function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length -1];
  // OR
  // const lastIndex =str.length -1;
  // const lastCharacter=str[lastIndex];
  // return lastCharacter;


}

function oneCharacter(str) {
  return str[8];
}

function twoCharacters(str) {
  // return str[str.length -3] + str[str.length -12];
  const answer = str[2] + str[11];
  return answer;
}

function initials(str) {
  // return str[0] + '.' + str[7] + '.';
  return firstCharacter(str) + '.' + str[str.indexOf(' ')+1] + '.';
}

function yeller(str) {
  // return capitalize(str) + '!!!';
  const capitalized = capitalize(str);
  const first = exclaim(capitalized);
  const second = exclaim(first);
  const third = exclaim(second);
  return third;

}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};