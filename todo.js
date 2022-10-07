const inputField = document.querySelector(".input");
const entryHolder = document.querySelector("section");
const addButton = document.querySelector(".add");

window.onload = () => {
   if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
         let myDiv = document.createElement("div");
         let myP = document.createElement("P");
         let btn = document.createElement("BUTTON");
         myP.innerText = localStorage.key([i]);
         btn.innerText = "Delete";
         myDiv.append(myP);
         myDiv.append(btn);
         entryHolder.append(myDiv);
         btn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            localStorage.removeItem(`${myP.innerText}`);
         });
      }
   }
};

addButton.onclick = (e) => {
   e.preventDefault();
   if (inputField.value !== "") {
      let myDiv = document.createElement("div");
      let myP = document.createElement("P");
      let btn = document.createElement("BUTTON");
      myP.innerText = inputField.value;
      btn.innerText = "Delete";
      myDiv.append(myP);
      myDiv.append(btn);
      entryHolder.append(myDiv);
      btn.addEventListener("click", (e) => {
         e.target.parentElement.remove();
         localStorage.removeItem(`${myP.innerText}`);
      });
      localStorage.setItem(`${inputField.value}`, inputField.value);
   }
   inputField.value = "";
};
