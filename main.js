requirejs.config({
    baseUrl: './',
    paths: {
       
        jquery:'/lib/jquery-3.2.1'
    }
});

require(['framework', 'jquery'], function (f,jq) {
    angular.bootstrap($("html"), [f.name]);
});
