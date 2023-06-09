export const getComment = function (movieId) {
  const reviewData = JSON.parse(localStorage.getItem(`comment${movieId}`));
  return reviewData;
};
