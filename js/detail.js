import deleteComment from "./comment/deleteComment.js";
import { detailTemplate } from "./template/detailTemplate.js";
import getComment from "./comment/getComment.js";
import { getData } from "./getData.js";
import postCommnet from "./comment/postComment.js";
import update from "./comment/updateComment.js";

//메인페이지에서 받아온 id값 불러오기
const movieId = JSON.parse(localStorage.getItem("movieId"));

setTimeout(function () {
  // 바로 localStorage에서 받아오는 것이 비동기가 안되어 있기 때문에 안나오는 경우가 가끔있어서 setTimeout을 사용
  detailTemplate(movieId);
}, 100);

//input 값들 불러오기
const data = getData(movieId);

getComment(data);

const commentEl = document.querySelector("#comment");
commentEl.addEventListener("click", function (e) {
  console.log(e.target.classList.contains("update"));
  if (e.target.classList.contains("update")) {
    //update 로직
    update({ e, movieId });
  } else if (e.target.classList.contains("delete")) {
    //delete 로직
    deleteComment({ e, movieId });
  }
});

// 댓글 POST 클릭이벤트
const commentBtn = document.querySelector("#comment-btn");
commentBtn.addEventListener("click", postCommnet);
