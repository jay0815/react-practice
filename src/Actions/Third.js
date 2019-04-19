export const updateReason = (reason) => (dispatch, getState) =>
  dispatch({
    types: 'UPDATE_REASON',
    meta: reason
  })


  export const updateReason1 = (reason) =>
    ({
      type: 'UPDATE_REASON',
      meta: reason
    })
