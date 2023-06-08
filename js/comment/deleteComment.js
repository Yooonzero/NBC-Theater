import getComment from "./getComment.js";
import { getData } from "../getData.js";

export default function deleteComment({ e, movieId }) {
  const data = getData(movieId);
  const index = e.target.parentNode.parentNode.getAttribute("data-number");
  const deletedData = data.toSpliced(index, 1);
  const deletedArr = JSON.stringify([...deletedData]);
  localStorage.setItem(`comment${movieId}`, deletedArr);
  getComment(deletedData);
}
