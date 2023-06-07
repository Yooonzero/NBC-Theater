// 1. 해당영화의 상세페이지에있는 local storage에서 데이터를 userComment 변수에 할당.
const userComment = JSON.parse(localStorage.getItem("comment447277"));
console.log(document.querySelector("#comment"));
console.log(userComment);
console.log(userComment[`${index}`]);

// 2. 값을 할당한 userComment에 toSpliced메서드를 넣어준다.
// console.log(userComment.toSpliced(0, 1));
// console.log(typeof userComment.toSpliced(0, 1));

// 3. toSpliced 메서드를 통해 생성한 배열을 새로운 newUserComment에 할당하고, spread oprator를 사용해 새 배열에 넣어주고, 값을 문자열로 변환해 arr에 할당한다.
// 순환참조는 throw error -> toSpliced 가 순환참조여서 에러가 발생 -> 새로운 변수에 얕은복사
// const newUserComment = userComment.toSpliced(0, 1);
// const arr = JSON.stringify([...newUserComment]);
// console.log(newUserComment);
// console.log(arr);

// 4. 삭제한 데이터를 다시 로컬저장소에 set해준다.
// data-nember 에 있는 데이터를 지워주고 붙여주면 되나 ?
function deleteComment() {
  //   const userComment = JSON.parse(localStorage.getItem("comment447277"));
  console.log(
    userComment[0]
  ) // const arr = JSON.stringify([...newUserComment]) // const newUserComment = userComment.toSpliced(0, 1)
  `<li class="review" data-number="${index}">
        <p class="comment-contents">${contents}</p>
        <p class="commnet-writer">작성자: ${writer}</p>
        <div>
            <button class="update">수정하기</button>
            <button onclick="deleteComment()" class="delete">삭제하기</button>
        <div>
    </li>`;
}
