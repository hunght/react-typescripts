const NAME = 'Errors.';
export const Errors = { CLEAR: NAME + 'CLEAR' };

export const clearErrors = () => async (dispatch: any, getStore: any) => {
  dispatch({ type: Errors.CLEAR });
};
