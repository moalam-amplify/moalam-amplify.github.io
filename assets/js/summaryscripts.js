// window.onload = {
    
//     document.getElementById("sp1").getElementsByTagName("li")[1].innerHTML = localStorage.getItem('yellowCount');
//     document.getElementById("sp1").getElementsByTagName("li")[2].innerHTML = localStorage.getItem('greenCount');
// }

window.onload = (event) => {
    document.getElementById("sp1li1").innerHTML = localStorage.getItem('purpleCount');
    document.getElementById("sp1li2").innerHTML = localStorage.getItem('yellowCount');
    document.getElementById("sp1li3").innerHTML = localStorage.getItem('greenCount');
  };