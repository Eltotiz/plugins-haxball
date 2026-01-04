module.exports = function(room, config) {
  room.onPlayerJoin = function(player) {
    room.sendAnnouncement(`¡HOLA ${player.name}! 👋`, null, 0xFFFFFF, "bold", 1);
  };
};
