define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.about',
        [
         'app.about.partials',
         'ui.router',
         'plusOne'
        ]);
});