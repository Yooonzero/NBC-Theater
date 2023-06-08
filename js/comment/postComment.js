import getComment from "./getComment.js";

export default function postCommnet() {
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");
  const contentsInput = document.querySelector("#contents");
  const movieId = JSON.parse(localStorage.getItem("movieId"));

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
  let data;
  let commentKey = `comment${movieId}`;
  // console.log(JSON.parse(localStorage.getItem(commentKey)))
  if (JSON.parse(localStorage.getItem(commentKey))) {
    data = JSON.parse(localStorage.getItem(commentKey));
  } else {
    data = [];
  }

  let commentValue = {
    writer: nameInput.value,
    password: passwordInput.value,
    contents: contentsInput.value,
  };
  data.push(commentValue);
  localStorage.setItem(commentKey, JSON.stringify(data));

  nameInput.value = "";
  passwordInput.value = "";
  contentsInput.value = "";

  getComment(data);
}
