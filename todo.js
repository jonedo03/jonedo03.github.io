addli = Function() {
  var myBox, mylist,myLi, myPriority, mytext, myUL, myInput;
  
  myBox = document.querySelector ('#textbox');
  
  myPriority = document.querySelector("#priority");
  
  myLi = document.createElement("li");
  
  myLi.classlist.add(myPriority.value);
  
  myText = document.createTextNode(myBox.value);
  
 myLi.appendChild(myText);
 
 myUL = document.querySelector("#tasklist");
 
 myUL.appendChild(myLi);
 
 myInput = document.createElement("INPUT");
 
 myInput.type = "checkbox";
 
 myLi.appendChild(myInput);
 
}
  
  // dropdowninput = document.querySelector("#priority");
  // dropdowninput.value
  
  
  

 
  

