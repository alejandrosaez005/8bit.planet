
document.getElementById("formulario").addEventListener("submit", function(event) {


    event.preventDefault();

    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);


    let subtotal = precio * cantidad;


    let total = subtotal * 1.10;

    document.getElementById("resultado").textContent =
        "Total con IVA: " + total.toFixed(2) + " €";
});


const imagen = document.getElementById("imagen");
  const modal = document.getElementById("modal");
  const imagenGrande = document.getElementById("imagenGrande");

  imagen.addEventListener("click", () => {

    modal.style.display = "flex";

    imagenGrande.src = imagen.src;

  });

  modal.addEventListener("click", () => {

    modal.style.display = "none";

  });
