function openTab(evnt,pageName){
  var i, tabcontent,tablink;
  tabcontent = document.getElementbyClassName("tabcontent");
  for(i = 0; i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementbyClassName("tablink");
  for(i = 0; i<tablink.length;i++){
    tablink[i].className = tablink[i].className.replace("active","");
  }
  
  document.getElementById(pageName).style.display = "block";
  
  evt.currentTarget.className += " active";
}
