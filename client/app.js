angular.element(document).ready(()=> {
    angular2now.init();
    let { SetModule, Component, View, Inject, bootstrap, options } = angular2now;

    options({controllerAs: 'vm'});

    SetModule('app', ['angular-meteor']);

    @Component({
        selector: 'app',
    })
    @View({
        template: `<h2>Welcome to angular2-now!</h2>`
    })
    @Inject('$http')
    class App {
        constructor($http) {
            console.log('$http:', $http);
        }
    }

    bootstrap(App);

    console.log('! app');
})
