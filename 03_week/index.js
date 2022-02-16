const btnScrollToTop = document.getElementById("btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
window.ScrollTo({
top:0,
left:0,
behavior:"smooth"
});
});