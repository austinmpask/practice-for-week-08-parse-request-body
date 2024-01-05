function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  return input.map((ele) => {
    return ele.split("=");
  });
}

function thirdStep(input) {
  // Your code here
  return input.map((ele) => {
    let value = ele[1].split("");
    value = value.map((char) => {
      return char === "+" ? " " : char;
    });
    value = value.join("");
    ele[1] = value;
    return ele;
  });
}

function fourthStep(input) {
  return input.map((ele) => {
    return [ele[0], decodeURIComponent(ele[1])];
  });
}

function fifthStep(input) {
  return {
    username: input[0][1],
    password: input[1][1],
  };
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
