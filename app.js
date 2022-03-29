const {
  statusCriar,
  raridadeCriar,
  danoCriar,
  durabilidade,
  efeito,
} = require("./random/create");
const { salvarItem } = require("./util/salvarItem");

const criarItem = async () => {
    let item = {
      // Raridade: await raridadeCriar(),
      // Durabilidade: await durabilidade(),
      // Dano: await danoCriar(),
      Status: await statusCriar(),
      //Efeito: await efeito(),

    };
    if (item) {
      await salvarItem(item);
    }
  }

  const numItens = 1;
  for (let i = 0; i < numItens; i++) {
  criarItem(numItens);
  }
