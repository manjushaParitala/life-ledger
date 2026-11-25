const { nxE2EPreset } = require('@nx/cypress/plugins/cypress-preset');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run web:serve',
      },
    }),
    baseUrl: 'http://localhost:4200',
  },
});
