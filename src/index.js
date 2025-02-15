const acp = document.querySelectorAll("button.confirm-btn");
const del = document.querySelectorAll("button.delete-btn");
//accepted
acp.forEach((items) => {
  const check = items.addEventListener("click", function () {
    const clicked_user = items.parentNode;
    const deletetion = clicked_user.parentElement;
    console.log(clicked_user);
    clicked_user.innerHTML = '<p style="color: rgb(8, 182, 8); font-weight: bold">Accepted!</p>';
    if (!items.childElementCount) {
      setTimeout(() => {
        deletetion.style.opacity = 0;
        setTimeout(() => {
          deletetion.remove();
        }, 500);
      }, 1000);
    }
  });
});
//deletetion
del.forEach((items) => {
  const check = items.addEventListener("click", function () {
    const clicked_user = items.parentNode;
    const deletetion = clicked_user.parentElement;
    console.log(clicked_user);
    clicked_user.innerHTML = '<p style="color: rgb(248, 35, 35); font-weight: bold">Denied!</p>';
    if (!items.childElementCount) {
      setTimeout(() => {
        deletetion.style.opacity = 0;
        setTimeout(() => {
          deletetion.remove();
        }, 500);
      }, 1000);
    }
  });
});
// see all
const see_all = document.querySelector(".inner-more");
const list = document.querySelector(".list-item");
see_all.addEventListener("click", function () {
  see_all.remove();
  setTimeout(() => {
    list.style.opacity = 100;
  }, 200);
});
// list item setting
document.querySelectorAll(".item .question").forEach((items) => {
  items.addEventListener("click", function () {
    const open = this.parentNode;
    open.classList.toggle("haha");
  });
});
