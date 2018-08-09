const validate = ({ creator, content }: any) => {
  let error: any = {};
  if (!content) {
    error.content = 'Should not be empty.';
  }
  if (!creator) {
    error.creator = 'Should not be empty.';
  }
  return error;
};

export default validate;
