const button = document.querySelector(".submit");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
button.addEventListener("click", (e) => {
  const isCol1Active = col1.classList.contains("active-bg");
  if (isCol1Active) {
    col1.classList.replace("active-bg", "inactive-bg");
    col2.classList.replace("inactive-bg", "active-bg");
  } else {
    col1.classList.replace("inactive-bg", "active-bg");
    col2.classList.replace("active-bg", "inactive-bg");
  }
});

/*
let active = "col1";
button.addEventListener("click", (e) => {
  //determine which col is active & which is inactive
  const activeCol = active === "col1" ? col1 : col2;
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
