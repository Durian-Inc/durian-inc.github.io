navbtns = document.querySelectorAll(".btn");
hook = document.querySelector(".hook");
wrapper = document.querySelector(".wrapper");

for (var i = 0; i < navbtns.length; i++) {
  navbtns[i].addEventListener("click", function(){
    hook.classList.remove("new");
    wrapper.classList.remove("fresh");
  });
}
