import commentTemplate from "../template/commentTemplate.js";
import { getComment } from "./getComment.js";

export default function update({ e, movieId }) {
  const data = getComment(movieId);
  const index = e.target.parentNode.parentNode.getAttribute("data-number");
  const passwordPrompt = prompt("비밀번호를 입력해주세요");
  if (passwordPrompt !== data[index].password) {
    return alert("비밀번호가 다릅니다.");
  }
  const li = e.target.parentNode.parentNode;
  li.innerHTML = `
        <label>작성자</label>
        <input class="update-writer${index}" type="text" />
        <label>내용</label>
        <textarea class="update-contents${index}"  placeholder="리뷰내용을 입력하세요."></textarea>
        <button class="update-submit-btn${index}">수정하기</button>
      `;
  const updateSubmitBtn = document.querySelector(`.update-submit-btn${index}`);
  const updateWriter = document.querySelector(`.update-writer${index}`);
  const updateContents = document.querySelector(`.update-contents${index}`);
  updateWriter.value = data[index].writer;
  updateContents.value = data[index].contents;
  updateWriter.focus();
  updateSubmitBtn.addEventListener("click", function () {
    data[index] = {
      ...data[index],
      writer: updateWriter.value,
      contents: updateContents.value,
    };
    localStorage.setItem(`comment${movieId}`, JSON.stringify(data));

    commentTemplate(data);
  });
}
