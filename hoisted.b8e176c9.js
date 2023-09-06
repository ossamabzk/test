<!DOCTYPE html>
<html>
<head>
    <title>Prueba de conexión al servidor</title>
</head>
<body>
    // Código JavaScript para mostrar la dirección IP del usuario en un pop-up
window.addEventListener('DOMContentLoaded', () => {
  // Realiza una solicitud a un servicio de detección de IP (puedes utilizar un servicio público o uno propio)
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const userIP = data.ip;
      // Muestra la dirección IP en un pop-up
      alert('Tu dirección IP es: ' + userIP);
    })
    .catch(error => {
      console.error('Error al obtener la dirección IP:', error);
    });
});

</body>
</html>
