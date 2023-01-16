window.onload = function() {
  let link = document.createElement("link");
  link.href = "style.css";      /**** your CSS file ****/
  link.rel = "stylesheet";
  link.type = "text/css";
  frames[0].document.head.appendChild(link); /**** 0 is an index of your iframe ****/
}
