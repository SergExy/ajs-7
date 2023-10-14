class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const check = this.userName.match(/[^(A-Z|a-z)|\d|^(-|_)]/s);
    const checkStartEnd = this.userName.match(/^[^A-Z|a-z]|[^A-Z|a-z]$/);
    const checkNum = this.userName.match(/[0-9]{3}/g);

    if (check || checkStartEnd || checkNum) return false;
    return true;
  }
}

export default Validator;
