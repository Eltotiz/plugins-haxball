// saludo.js - Plugin simple de bienvenida

var room = HBInit();  // Obligatorio: crea el room object

// Opcional: metadata del plugin (recomendado para que aparezca bien en logs)
room.pluginSpec = {
  name: 'saludo',          // nombre único
  author: 'Eltotiz',
  version: '1.0.0',
  config: {},              // si quieres config en el futuro
  dependencies: [],        // sin dependencias
  order: {},
  incompatible_with: []
};

room.onPlayerJoin = function(player) {
  room.sendAnnouncement(`¡HOLA ${player.name}! 👋`, null, 0xFFFFFF, "bold", 1);
};
