/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/**/*',
    '/images/**/*',
    '/src/**/*'
  ],
  navigateFallback: 'index.html',
};
