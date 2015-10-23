addli = function() {
  var myBox, mylist,myLi, myPriority, mytext, myUL, myInput;
  
  myBox = document.querySelector ('#textbox');
  
  myPriority = document.querySelector("#priority");
  
  myLi = document.createElement("li");
  
  myText = document.createTextNode(myBox.value);
  
  myLi.classList.add(myPriority.value);
  
 myLi.appendChild(myText);
 
 myUL = document.querySelector("#tasklist");
 
 myUL.appendChild(myLi);
 
 myInput = document.createElement("INPUT");
 
 myInput.type = "checkbox";
 
 myLi.appendChild(myInput);
 
 localsave("tasklist")
 
 
 
}
  
  doneTask = function() {
   if (this.checked) {
      this.parentNode.classList.add("done");
      
    } else {
      this.parentNode.classList.remove("done");
      
    }
  localsave ('tasklist')
  }
  
  
  

 
  

