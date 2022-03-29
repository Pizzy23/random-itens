const fs = require("fs");
const path = require("path");
const config = { enconding: "uft-8", flag: "a" };

salvarItem = async (item) => {
  const file = "./../itens/itens-criados.json";
  const dirname = path.resolve(__dirname, file);
  const linha = `\n${item}`;
  return fs.writeFile(dirname, linha, config, (err) => {
    if (err) throw err;
  });
};
module.exports = {
  salvarItem,
};
