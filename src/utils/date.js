export const getFormattedDate = (timestamp) => {
  let date = timestamp ? timestamp.toDate() : new Date();
  let dia = date.getDate().toString();
  dia = dia.length == 1 ? "0" + dia : dia;
  let mes = (date.getMonth() + 1).toString();
  mes = mes.length == 1 ? "0" + mes : mes;
  let ano = date.getFullYear();
  return dia + mes + ano;
};

export const timestampToDayName = (timestamp) => {
  const date = timestamp.toDate();
  const days = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  return days[date.getDay()];
};

export const timestampToDayMonth = (timestamp) => {
  let date = timestamp ? timestamp.toDate() : new Date();
  let dia = date.getDate().toString();
  dia = dia.length == 1 ? "0" + dia : dia;
  let mes = (date.getMonth() + 1).toString();
  mes = mes.length == 1 ? "0" + mes : mes;
  return dia + "/" + mes;
};
