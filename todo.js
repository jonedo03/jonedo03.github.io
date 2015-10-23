addli = function() {
  var myBox, mylist,myLi, myPriority, mytext, myUL, myInput;
  
  myBox = document.querySelector ('#textbox');
  
  myPriority = document.querySelector("#priority");
  
  myLi = document.createElement("li");
  
  myText = document.createTextNode(myBox.value);
  
  myLi.classlist.add(myPriority.value);
  
 myLi.appendChild(myText);
 
 myUL = document.querySelector("#tasklist");
 
 myUL.appendChild(myLi);
 
 myInput = document.createElement("INPUT");
 
 myInput.type = "checkbox";
 
 myLi.appendChild(myInput);
 
 localsave("tasklist")
 
}
  
  // dropdowninput = document.querySelector("#priority");
  // dropdowninput.value
  
  
  

 
  

