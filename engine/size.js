//dummy file now
let windowW1=window.innerWidth;
let phone=false;
let navBar=document.getElementById("nav");
if(windowW1<500)
{
  phone=true;
  let i1=document.getElementById("i1");
  let i2=document.getElementById("i2");
  let i3=document.getElementById("i3");
  let i4=document.getElementById("i4");
  
  i1.remove();
  i2.remove();
  i3.remove();
  i4.remove();
  let sec1=document.getElementById("section1");
  section1.setAttribute("style","position:static;");
  let sec=document.getElementById("sections");
  sec.setAttribute("style","display:flex;flex-direction:column;color:red;");
  

}
else
{
  
}