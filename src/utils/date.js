export const formatDate = (timestamp) => {
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

export const timeDiffFormatter = (date) => {
  const now = new Date();
  let diff = Math.abs(now.getTime() - date.getTime());
  const daysDifference = Math.floor(diff / 1000 / 60 / 60 / 24);
  diff -= daysDifference * 1000 * 60 * 60 * 24;
  const hoursDifference = Math.floor(diff / 1000 / 60 / 60);
  diff -= hoursDifference * 1000 * 60 * 60;
  const minutesDifference = Math.floor(diff / 1000 / 60);
  diff -= minutesDifference * 1000 * 60;
  const monthsDifference = Math.trunc(daysDifference / 30);
  const yearsDifference = Math.trunc(daysDifference / 365);

  if (yearsDifference > 0) {
    return "há " + yearsDifference + (yearsDifference < 2 ? " ano" : " anos");
  } else if (monthsDifference > 0) {
    return (
      "há " + monthsDifference + (monthsDifference < 2 ? " mês" : " meses")
    );
  } else if (daysDifference > 0) {
    return "há " + daysDifference + (daysDifference < 2 ? " dia" : " dias");
  } else if (hoursDifference > 0) {
    return "há " + hoursDifference + (hoursDifference < 2 ? " hora" : " horas");
  } else {
    return (
      "há " +
      minutesDifference +
      (minutesDifference < 2 ? " minuto" : " minutos")
    );
  }
};
