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

// function oneCharacter(str) {
//   return str[8];
// }

function oneCharacter(str, i) {
  return str[i];
}

// function twoCharacters(str) {
//   // return str[str.length -3] + str[str.length -12]; (didn't work)
//   const answer = str[2] + str[11];
//   return answer;
// }

function twoCharacters(str,index1,index2) {
  return answer = str[index1] + str[index2];
}

function initials(str) {
  // return str[0] + '.' + str[7] + '.'; (works for only the example)
  return firstCharacter(str) + '.' + str[str.indexOf(' ')+1] + '.';
}

// function initials(str) {
//   const firstInitial = firstCharacter(str);
//   const spaceIndex = str.indexOf(' ');
//   const secondInitial = str[spaceIndex+1];
//   return firstInitial + '.' + secondInitial + '.'
// }

function yeller(str) {
  // return capitalize(str) + '!!!'; (worked but not nice)
  const capitalized = capitalize(str);
  const first = exclaim(capitalized);
  const second = exclaim(first);
  const third = exclaim(second);
  return third;

}

// function yeller(str) {
//   return capitalize(exclaim(exclaim(exclaim(str))));
// }




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