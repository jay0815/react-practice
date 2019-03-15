export const updateReason = (reason) => (dispatch, getState) =>
  dispatch({
    types: 'UPDATE_REASON',
    meta: reason
  })
