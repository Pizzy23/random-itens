const { NumeroRandomico } = require("../util/random.js");
const random = new NumeroRandomico();

statusCriar = async () => {
  let num = await random.numeroDoStatus();
  let status = {};
  if (!status.dmg) {
    const dmg = await random.critico();
    status.dmg = dmg;
  }
  switch (num) {
    case 1:
      const critic = await random.critico();
      status.critic = critic;
      return status;
    case 2:
      const lifesteal = await random.critico();
      status.lifesteal = lifesteal;
      return status;
    case 3:
      const atkSpd = await random.critico();
      status.atkSpd = atkSpd;
      return status;
  }
  if (status) statusCriar(status);
};

raridadeCriar = async () => {};

danoCriar = async () => {};

durabilidade = async () => {};

efeito = async () => {};

module.exports = {
  statusCriar,
  raridadeCriar,
  danoCriar,
  durabilidade,
  efeito,
};
