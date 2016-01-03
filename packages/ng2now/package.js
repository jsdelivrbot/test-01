Package.describe({
    name: 'ng2now',
    version: '0.0.1',
});

Npm.depends({
    'angular2-now': '1.1.0'
})

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('angular');
    api.addFiles([
        '.npm/package/node_modules/angular2-now/dist/angular2-now.js',
        'ng2now.js'
    ], 'client', {transpile:false});
});
