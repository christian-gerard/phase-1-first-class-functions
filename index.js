function callback() {
    return 5
}

function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction() {
    return function xyz () {}
}

function returnsAnAnonymousFunction () {

    return function () {}
}