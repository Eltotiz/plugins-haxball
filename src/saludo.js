// saludo.js - Plugin simple de bienvenida

var room = HBInit();  // Crea el room object (parámetros vacíos, HHM los ignora)

room.onPlayerJoin = function(player) {
  room.sendAnnouncement(`¡HOLA ${player.name}! 👋`, null, 0xFFFFFF, "bold", 1);
};

module.exports = room;  // ¡¡¡ESTO ES OBLIGATORIO!!!
