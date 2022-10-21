// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("confidence-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var submitButton = document.getElementById('submit-button');
submitButton.onclick = function(event){
    if(localStorage.getItem("pagenum") === 'undefined' || localStorage.getItem("pagenum") === null){
        localStorage.setItem("pagenum", 2);
    }else{
        localStorage.setItem("pagenum",parseInt(localStorage.getItem("pagenum")) + 1);
    }

    if(parseInt(localStorage.getItem("pagenum")) >= 6){
        window.location.href = "summary.html";
    }else{
        window.location.href = localStorage.getItem("pagenum") + ".html";
    }
}

// var textAreaText = document.getElementById('studentNote');
// textAreaText.onchange = function(){
//     document.getElementById('studentNote') = 
// }

var Notes = [];
var saveButton = document.getElementById('save-button');
saveButton.onclick = function(event) {
    Notes[pageNumbers - 1] = document.getElementById('studentNote').innerHTML;
    localStorage.setItem("Notes", Notes);
    modal.style.display = "none";
  }

// Increment Decrement Button values.
var purpleButton = document.getElementsByClassName("button1")[0];
purpleButton.onclick = function(event) {
    if(localStorage.getItem('purpleCount') === 'undefined' || localStorage.getItem('purpleCount') === null){
        localStorage.setItem('purpleCount', 1)
    }else{
        localStorage.setItem('purpleCount', parseInt(localStorage.getItem('purpleCount')) + 1)
    }
}

var yellowButton = document.getElementsByClassName("button2")[0];
yellowButton.onclick = function(event) {
    if(localStorage.getItem('yellowCount') === 'undefined' || localStorage.getItem('yellowCount') === null){
        localStorage.setItem('yellowCount', 1)
    }else{
        localStorage.setItem('yellowCount', parseInt(localStorage.getItem('yellowCount')) + 1)
    }
}

var greenButton = document.getElementsByClassName("button3")[0];
greenButton.onclick = function(event) {
    if(localStorage.getItem('greenCount') === 'undefined' || localStorage.getItem('greenCount') === null){
        localStorage.setItem('greenCount', 1)
    }else{
        localStorage.setItem('greenCount', parseInt(localStorage.getItem('greenCount')) + 1)
    }
}