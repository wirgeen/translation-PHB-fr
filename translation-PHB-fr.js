const MODULE_ID = 'translation-PHB-fr';

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: 'Activer automatiquement la traduction via Babele',
    hint: 'Active automatiquement les traductions Babele sans avoir à pointer vers le répertoire contenant les traductions.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }
      window.location.reload();
    },
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (game.babele) {
    game.babele.register({
      module: MODULE_ID,
      lang: 'fr',
      dir: 'compendium/fr'
    });
  }
}
