let string = "";
let ans = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Enter") {
      string = eval(string);
      document.querySelector("input").value = string;
      ans = string;
    }
    
    else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }
    
    else if (e.target.innerHTML == "^") {
      string = string + "**";
      string = eval(string);
      document.querySelector("input").value = string;
    }
    
    else if (e.target.innerHTML == "√") {
      string = eval(string);
      string = Math.sqrt(string);
      document.querySelector("input").value = string;
      ans = string;
    }

    else if (e.target.innerHTML == "Ans") {
      document.querySelector("input").value = ans;
    }
    
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
