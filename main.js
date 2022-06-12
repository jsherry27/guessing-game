const getNum = () => {
  return Math.round(Math.random() * 100);
};

const justinRandomNum = getNum();
const ericRandomNum = getNum();

let justinGuessNum = 0;
let ericGuessNum = 0;

const justinBtn = document.querySelector(".col1 .submit");
const ericBtn = document.querySelector(".col2 .submit");

const justinForm = document.querySelector(".col1 form");
const ericForm = document.querySelector(".col2 form");

const justinInput = document.querySelector(".col1 form input");
const ericInput = document.querySelector(".col2 form input");

const justinWaiting = document.querySelector(".col1 > p");
const ericWaiting = document.querySelector(".col2 > p");

const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

const toggleActivePlayer = (e) => {
  e.preventDefault();
  const isCol1Active = col1.classList.contains("active-bg");
  if (isCol1Active) {
    //make the active column, inactive
    col1.classList.replace("active-bg", "inactive-bg");
    col2.classList.replace("inactive-bg", "active-bg");
    justinForm.classList.replace("show", "hide");
    ericForm.classList.replace("hide", "show");
    justinWaiting.classList.replace("hide", "show");
    ericWaiting.classList.replace("show", "hide");
    justinGuessNum = Number(justinInput.value);
  } else {
    // col1.classList.replace("inactive-bg", "active-bg");
    // col2.classList.replace("active-bg", "inactive-bg");
    // justinForm.classList.replace("hide", "show");
    // ericForm.classList.replace("show", "hide");
    // justinWaiting.classList.replace("show", "hide");
    // ericWaiting.classList.replace("hide", "show");
    ericGuessNum = Number(ericInput.value);
    const ericProximity = Math.abs(ericGuessNum - ericRandomNum);
    const justinProximity = Math.abs(justinGuessNum - justinRandomNum);

    let result = document.querySelector(".result");
    col1.classList.remove("active-bg");
    col1.classList.remove("inactive-bg");
    col2.classList.remove("active-bg");
    col2.classList.remove("inactive-bg");
    ericWaiting.classList.remove("hide");
    justinWaiting.classList.remove("hide");
    ericWaiting.classList.add("show");
    justinWaiting.classList.add("show");
    ericForm.classList.replace("show", "hide");
    justinForm.classList.replace("show", "hide");
    ericWaiting.textContent = `Eric guessed ${ericGuessNum} & was ${ericProximity} away from ${ericRandomNum}`;
    justinWaiting.textContent = `Justin guessed ${justinGuessNum} & was ${justinProximity} away from ${justinRandomNum}`;
    if (ericProximity > justinProximity) {
      col1.classList.add("winner");
      col2.classList.add("loser");
      result.textContent = "Justin Wonヽ(͡◕ ͜ʖ ͡◕)ﾉ";
    } else {
      col1.classList.add("loser");
      col2.classList.add("winner");
      result.textContent = "Eric Won ᕕ( ᐛ )ᕗ ";
    }
  }
};

justinBtn.addEventListener("click", toggleActivePlayer);
ericBtn.addEventListener("click", toggleActivePlayer);

///Below, is the use of the ternary operator
/*

let active = "col1";
button.addEventListener("click", (e) => {

  //determine which col is active & which is inactive

  const activeCol = active === "col1" ? col1 : col2;

    ///Above & below, you can see the use of the ternary operator.
    //i.e this ..... const activeCol = active === "col1" ? col1 : col2;

  const inactiveCol = active === "col2" ? col1 : col2;

  //add the active class to the new active col & add the new inactive...
  //...class to the new inactive col

  activeCol.classList.remove("active-bg");
  activeCol.classList.add("inactive-bg");
  inactiveCol.classList.remove("inactive-bg");
  inactiveCol.classList.add("active-bg");

  //change what the active col is

  active = active === "col1" ? "col2" : "col1";
  //   if (active === "col1") {
  //     active = "col2";
  //   } else {
  //     active = "col1";
  //   }
});
*/
