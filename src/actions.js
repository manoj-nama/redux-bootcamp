export const fetchData = (id) => ({
  type: 'FETCH',
  id
});

const fetchUserStarted = () => ({
  type: 'FETCH_USER_STARTED'
});
const fetchUserSuccess = (user) => ({
  type: 'FETCH_USER_SUCCESS',
  user
});
const fetchUserFailed = (err) => ({
  type: 'FETCH_USER_FAILED',
  err
});

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch(fetchUserStarted());
    setTimeout(() => {
      dispatch(fetchUserSuccess({
        name: 'John Doe',
        email: 'bond007@mi6.com'
      }));
    }, 5000);
  }
}