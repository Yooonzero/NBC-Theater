export const getData = function (movieId) {
  const reviewData = JSON.parse(localStorage.getItem(`comment${movieId}`));
  return reviewData;
};
