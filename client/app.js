let { SetModule, Component, View, Inject, bootstrap, options } = angular2now;

options({controllerAs: 'vm'});

SetModule('app', ['angular-meteor']);

@Component({
    selector: 'app',
    template: `<h2>Welcome to angular2-now human!</h2>`
})
@Inject('$http')
class App {
    constructor($http) {
        console.log('$http:', $http);
    }
}

bootstrap(App);

console.log('! app');
