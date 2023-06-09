const commentTemplate = function (data) {
  if (!data) return;
  const comment = document.querySelector("#comment");
  comment.innerHTML = data
    .map((review, index) => {
      let { writer, contents } = review;
      if (!writer) writer = "이름이 없습니다.";
      if (!contents) contents = "내용이 없습니다.";
      return `<li class="review" data-number="${index}">
                  <p class="comment-contents">${contents}</p>
                  <p class="comment-writer">작성자: ${writer}</p>
                  <div>
                    <button class="update">수정</button>
                    <button class="delete">삭제</button>
                  <div>
                </li>`;
    })
    .reverse()
    .join("");
};
export default commentTemplate;
