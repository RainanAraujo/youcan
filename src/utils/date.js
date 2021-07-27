export const getFormattedDate = () => {
  let date = new Date();
  let dia = date.getDate().toString();
  dia = dia.length == 1 ? "0" + dia : dia;
  let mes = (date.getMonth() + 1).toString();
  mes = mes.length == 1 ? "0" + mes : mes;
  let ano = date.getFullYear();
  return dia + mes + ano;
};
