const validate = () => {
  let nameError = "";
  let amountError = "";
  let currencyError = "";
  let dateError = "";
  let categoryError = "";
  if (!this.state.name) {
    nameError = "name is empty";
  }
  if (this.state.amount <= 0) {
    amountError = "amount is invalid";
  }
  if (!this.state.currency) {
    currencyError = "please choose currency";
  }
  if (!this.state.date) {
    dateError = "date not selected";
  }
  if (!this.state.category) {
    categoryError = "please choose a category";
  }
  if (nameError || amountError || currencyError || dateError || categoryError) {
    this.setState({
      nameError,
      amountError,
      currencyError,
      dateError,
      categoryError
    });
    return false;
  }
  return true;
};


export default validate;