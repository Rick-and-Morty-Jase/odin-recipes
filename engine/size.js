let navH=document.getElementById("nav").offsetHeight;
let para=document.getElementById("para").offsetHeight;
let h1H=document.getElementById("heading").offsetHeight;
let setH=window.innerHeight-(navH+para+h1H);
let section1=document.getElementById("section1");
section1.setAttribute("style","height:"+setH+"px;")