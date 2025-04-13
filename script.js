const pagoPorHora = 15;
    const tabla = document.getElementById("tabla");
    const totalMes = document.getElementById("totalMes");
    let total = 0;

    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      const fecha = document.getElementById("fecha").value;
      const horas = parseFloat(document.getElementById("horas").value);
      const totalDia = horas * pagoPorHora;
      total += totalDia;

      const row = tabla.insertRow();
      row.innerHTML = `<td>${fecha}</td><td>${horas}</td><td>S/ ${pagoPorHora}</td><td>S/ ${totalDia}</td>`;

      totalMes.innerText = `Total : S/ ${total}`;
      document.getElementById("form").reset();
    });