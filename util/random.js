class NumeroRandomico {
  async numeroDoStatus() {
    let random = Math.random() * (4 - 1) + 1;
    return (random = Math.floor(random));
  }

  async critico() {
    let random = Math.random() * (100 - 0);
    return (random = Math.floor(random));
  }
  async lifesteal() {
    let random = Math.random() * (30 - 0);
    return (random = Math.floor(random));
  }
  async atkSpd() {
    let random = Math.random() * (4 - 0);
    random = random.toFixed(2);
    return (random =  parseFloat(random));
  }
  async dmgCriti() {
    let random = Math.random() * (100 - 0);
    return (random = Math.floor(random));
  }
}

module.exports = { NumeroRandomico };
