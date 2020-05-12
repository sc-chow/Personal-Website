function openTab(pageName, element){
  var i, tabcontent,tablink;
  tabcontent = document.getElementbyClassName("tabcontent");
  for(i = 0; i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementbyClassName("tablink");
  for(i = 0; i<tablink.length;i++){
    tablink[i].style.backgroundColor = "";
  }
  
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();
