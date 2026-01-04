// Plugin de saludo simple - retorna la función directamente
function(room, config) {
  room.onPlayerJoin = function(player) {
    room.sendAnnouncement(`¡HOLA ${player.name}! 👋`, null, 0xFFFFFF, "bold", 1);
  };
}
