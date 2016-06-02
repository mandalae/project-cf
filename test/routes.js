var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
var router = require('../src/routes/route.js');

chai.use(spies);

describe('Routes', function() {
   
    var stateProvider;
    var urlRouteProvider;
    var stateSpy;
    beforeEach(function(){
        stateSpy = chai.spy(function(){
                    return stateProvider;
                });
        stateProvider = {
                state: stateSpy
            };
        urlRouteProvider = chai.spy.object(['otherwise']);
    });

    it('should set otherwise to the root', function(){
        router(stateProvider, urlRouteProvider);
        expect(urlRouteProvider.otherwise).to.have.been.called.with('/');
    });

    it('should set up routes for the site', function(){
        router(stateProvider, urlRouteProvider);
        expect(stateSpy).to.have.been.called.exactly(2);
    });

});