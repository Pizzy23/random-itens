class NumeroRandomico {

  async numeroDoStatus() {
    let random = Math.random() * (4 - 1)+1;
    return (random = Math.floor(random));
  }

  async critico() {
    let random = Math.random() * (100 - 0);
    return (random = Math.floor(random));
  }
}

module.exports = { NumeroRandomico };
