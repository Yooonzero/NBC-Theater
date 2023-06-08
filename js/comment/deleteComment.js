import getComment from "./getComment.js";
import { getData } from "../getData.js";

export default function deleteComment({ e, movieId }) {
  const data = getData(movieId);
  const index = e.target.parentNode.parentNode.getAttribute("data-number");
  const passwordPrompt = prompt("비밀번호를 입력해주세요");
  if (passwordPrompt !== data[index].password) {
    return alert("비밀번호가 다릅니다.");
  }
  const result = confirm("정말 삭제하시겠습니까?");
  if (!result) {
    return;
  }
  const deletedData = data.toSpliced(index, 1);
  const deletedArr = JSON.stringify([...deletedData]);
  localStorage.setItem(`comment${movieId}`, deletedArr);
  getComment(deletedData);
}
