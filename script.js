const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
const totalMes = document.getElementById("totalMes");
let total = 0;

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const fecha = document.getElementById("fecha").value;
  const horas = parseFloat(document.getElementById("horas").value);
  const tipoClase = document.getElementById("tipoClase").value;

  // Asignar tarifa según tipo de clase
  const pagoPorHora = tipoClase === "personalizada" ? 25 : 15;
  const totalDia = horas * pagoPorHora;
  total += totalDia;

  const row = tabla.insertRow();
  row.innerHTML = `
    <td>${fecha}</td>
    <td>${horas}</td>
    <td>${tipoClase}</td>
    <td>S/ ${totalDia.toFixed(2)}</td>
  `;

  totalMes.innerText = `TOTAL : S/ ${total.toFixed(2)}`;
  document.getElementById("form").reset();
});
