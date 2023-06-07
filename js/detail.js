import { detailTemplate } from "./detailTemplate.js";

//메인페이지에서 받아온 id값 불러오기
const movieId = JSON.parse(localStorage.getItem("movieId"));
console.log(movieId);

setTimeout(function () {
  // 바로 localStorage에서 받아오는 것이 비동기가 안되어 있기 때문에 안나오는 경우가 가끔있어서 setTimeout을 사용
  detailTemplate(movieId);
}, 100);

//input 값들 불러오기
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const contentsInput = document.querySelector("#contents");
const commentBtn = document.querySelector("#comment-btn");

const getReviewData = function () {
  const reviewData = JSON.parse(localStorage.getItem(`comment${movieId}`));
  return reviewData;
};
let data = getReviewData();

const getReview = function () {
  const data = getReviewData();
  if (!data) return;
  const comment = document.querySelector("#comment");
  comment.innerHTML = data
    .map((review, index) => {
      let { writer, contents } = review;
      if (!writer) writer = "이름이 없습니다.";
      if (!contents) contents = "내용이 없습니다.";
      return `<li class="review" data-number="${index}">
                <p class="comment-contents">${contents}</p>
                <p class="commnet-writer">작성자: ${writer}</p>
                <div>
                  <button class="update">수정하기</button>
                  <button onclick="deleteComment()" class="delete">삭제하기</button>
                <div>
              </li>`;
    })
    .join("");
  const updateBtns = document.querySelectorAll(".update");

  updateBtns.forEach((updateBtn, index) => {
    updateBtn.addEventListener("click", function () {
      const passwordPrompt = prompt("비밀번호를 입력해주세요");
      console.log(passwordPrompt);
      console.log(data);
      console.log(data[index].password);
      if (passwordPrompt !== data[index].password) {
        return alert("비밀번호가 다릅니다.");
      }
      // console.log(this.parentNode.parentNode);
      const li = this.parentNode.parentNode;
      li.innerHTML = `
        <input class="update-writer${index}" type="text" />
        <textarea class="update-contents${index}"  placeholder="리뷰내용을 입력하세요."></textarea>
        <button class="update-submit-btn${index}">수정제출하기</button>
      `;
      const updateSubmitBtn = document.querySelector(
        `.update-submit-btn${index}`
      );
      const updateWriter = document.querySelector(`.update-writer${index}`);
      const updateContents = document.querySelector(`.update-contents${index}`);
      updateSubmitBtn.addEventListener("click", function () {
        console.log(updateWriter.value);
        console.log(updateContents.value);
        console.log(data);
        data[index] = {
          ...data[index],
          writer: updateWriter.value,
          contents: updateContents.value,
        };
        localStorage.setItem(`comment${movieId}`, JSON.stringify(data));
        const updateTemp = `
                  <p class="comment-contents">${updateContents.value}</p>
                  <p class="commnet-writer">작성자: ${updateWriter.value}</p>
                  <div>
                    <button class="update">수정하기</button>
                    <button class="delete">삭제하기</button>
                  <div>
                  `;
        li.innerHTML = updateTemp;
        // window.location.reload();
      });
    });
  });
};
getReview();

commentBtn.addEventListener("click", function () {
  if (
    nameInput.value === "" ||
    passwordInput.value === "" ||
    contentsInput.value === ""
  ) {
    return alert("내용을 입력해주세요.");
  }
  // console.log(`이름: ${nameInput.value}`);
  // console.log(`비밀번호: ${passwordInput.value}`);
  // console.log(`컨텐츠: ${contentsInput.value}`);
  let commentArr;
  let commentKey = `comment${movieId}`;
  // console.log(JSON.parse(localStorage.getItem(commentKey)))
  if (JSON.parse(localStorage.getItem(commentKey))) {
    commentArr = JSON.parse(localStorage.getItem(commentKey));
  } else {
    commentArr = [];
  }

  let commentValue = {
    writer: nameInput.value,
    password: passwordInput.value,
    contents: contentsInput.value,
  };
  commentArr.push(commentValue);
  localStorage.setItem(commentKey, JSON.stringify(commentArr));

  nameInput.value = "";
  passwordInput.value = "";
  contentsInput.value = "";
  alert("댓글이 성공적으로 작성되었습니다.");
});
