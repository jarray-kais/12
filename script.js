var x= document.querySelector(".badge1").innerHTML;
function remove(){
  const element = document.querySelector(".card-list-item");
  x--;
  element.remove();
  document.querySelector(".badge1").innerHTML=x;
}
function change(){
  document.querySelector(".card-body h1").innerHTML='Sarra'
}

function accept(){
document.querySelector(".badge2").innerHTML++;
document.querySelector(".badge2").innerHTML=document.querySelector(".badge2").innerHTML;
remove();
}
