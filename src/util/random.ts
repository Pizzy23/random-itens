export class NumeroRandomico {
  async critic() {
    let random = Math.random() * (100 - 0);
    return (random = Math.floor(random));
  }
  async lifesteal() {
    let random = Math.random() * (30 - 0);
    return (random = Math.floor(random));
  }
  async atkSpd() {
    let random = Math.random() * (4 - 0);
    let fixedNumber = random.toFixed(2);
    return (random =  parseFloat(fixedNumber));
  }
  async armorPenetration(){
    let random = Math.random() * (50 - 0);
    return (random = Math.floor(random))
  }
  async furry(){
    let random = Math.random() * (15 - 0);
    let fixedNumber = random.toFixed(2);
    return (random =  parseFloat(fixedNumber));
  }
  async resist() {
    let random = Math.random() * (100 - 5);
    return (random = Math.floor(random));
  }
  async life(){
    let random = Math.random() * (10000 - 100);
    return (random = Math.floor(random));
  }
  async defense() {
    let random = Math.random() * (500 - 10);
    return (random = Math.floor(random));
  }
  async immunity() {
    let random = Math.random() * (100 - 10);
    return (random = Math.floor(random));
  }
  async cooldown() {
    let random = Math.random() * (40 - 0);
    return (random = Math.floor(random));
  }
  async weight(){
    let random = Math.random() * (10 - 0);
    let fixedNumber = random.toFixed(2);
    return (random =  parseFloat(fixedNumber));
  }

  async statusSelect() {
    let random = Math.random() * (10 - 1);
    return (random = Math.floor(random));
  }

  async damage() {
    let random = Math.random() * (10000 - 10);
    return (random = Math.floor(random))
  }

  async rarity() {
    let random = Math.random() * (5 - 1);
    return (random = Math.floor(random))
  }
}