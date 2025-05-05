function convertir() {
    const input = document.getElementById("celsiusInput").value;
    const celsius = Number(input);
  
    if (isNaN(celsius)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
  
    console.log("Grados Fahrenheit: " + fahrenheit);
    console.log("Grados Kelvin: " + kelvin);
  
    document.getElementById("resultados").innerHTML = `
      <p>Grados Fahrenheit: ${fahrenheit}</p>
      <p>Grados Kelvin: ${kelvin}</p>
    `;
  }
  