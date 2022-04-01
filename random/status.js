const { NumeroRandomico } = require("../util/random.js");
const random = new NumeroRandomico();

statusCriar = async () => {
  let num = await random.numeroDoStatus();
  const statusMaximo = 5
  let status = {};
  switch (num) {
    case 1:
      const critic = await random.critico();
      status.critic = critic;
      break;
    case 2:
      const lifesteal = await random.lifesteal();
      status.lifesteal = lifesteal;
      break;
    case 3:
      const atkSpd = await random.atkSpd();
      status.atkSpd = atkSpd;
      break;
    case 4:
      const dmgCriti = await random.dmgCriti()
      status.dmgCriti = dmgCriti
      break
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
  }
  if (status.length <= statusMaximo){ 
  statusCriar(status);}
};

module.exports = {
  statusCriar,
};
