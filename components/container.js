app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('container', {
      title: 'Container',
      template: 'formio/components/container.html',
      group: 'layout',
      settings: {
        input: false,
        columns: [[],[]]
      }
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('formio/components/container.html',
      '<div class="row">' +
        '<div class="col-xs-6" ng-repeat="components in component.columns">' +
          '<formio-component ng-repeat="component in components" component="component" data="data" formio="formio"></formio-component>' +
        '</div>' +
      '</div>'
    );
  }
]);