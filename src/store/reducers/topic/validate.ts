const validate = ({ name, subject }: any) => {
  let error: any = {};
  if (!name) {
    error.name = 'Should not be empty.';
  }
  if (!subject) {
    error.subject = 'Should not be empty.';
  }
  return error;
};

export default validate;
