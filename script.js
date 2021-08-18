
//task a


var element = document.getElementsByTagName("a");

for (i=0;i<element.length;i++) {
    var element = element[i];
    element.addEventListener("click",function (event) {
    event.preventDefault();
    let ans= this.getAttribute("href");
    alert(ans);
  }.bind(element));
}