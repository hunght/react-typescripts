const validate = ({ text }: any) => {
  let error: any = {};
  if (!text) {
    error.text = 'Should not be empty.';
  }
  return error;
};
export default validate;
