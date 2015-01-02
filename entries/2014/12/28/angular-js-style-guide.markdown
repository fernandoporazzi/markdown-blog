#AngularJS Style Guide

##An AngularJS Style Guide for Closure Users at Google.

This is the external version of a document that was primarily written for Google engineers. It describes a recommended style for AngularJS apps that use Closure, as used internally at Google. Members of the broader AngularJS community should feel free to apply (or not apply) these recommendations, as relevant to their own use cases.

This document describes style for AngularJS apps in google3. This guide supplements and extends the [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).


###Angular Language Rules

Choose a namespace for your project, and use goog.provide and goog.require.

```javascript
goog.provide('hello.about.AboutCtrl');
goog.provide('hello.versions.Versions');
```
**Why?** Google BUILD rules integrate nicely with closure provide/require.

Modules should reference other modules using the Angular Module's "name" property
```javascript
// file submodulea.js:
  goog.provide('my.submoduleA');

  my.submoduleA = angular.module('my.submoduleA', []);
  // ...

// file app.js
  goog.require('my.submoduleA');

  Yes: my.application.module = angular.module('hello', [my.submoduleA.name]);
  
      No: my.application.module = angular.module('hello', ['my.submoduleA']);
  
```

Controllers are classes. Methods should be defined on MyCtrl.prototype. See the JavaScript style guide

Google Angular applications should use the 'controller as' style to export the controller onto the scope. This is fully implemented in Angular 1.2 and can be mimicked in pre-Angular 1.2 builds.

Pre Angular 1.2, this looks like:
```javascript
/**
 * Home controller.
 *
 * @param {!angular.Scope} $scope
 * @constructor
 * @ngInject
 * @export
 */
hello.mainpage.HomeCtrl = function($scope) {
  /** @export */
  $scope.homeCtrl = this; // This is a bridge until Angular 1.2 controller-as

  /**
   * @type {string}
   * @export
   */
  this.myColor = 'blue';
};


/**
 * @param {number} a
 * @param {number} b
 * @export
 */
hello.mainpage.HomeCtrl.prototype.add = function(a, b) {
  return a + b;
};
```

And the template
```html
<div ng-controller="hello.mainpage.HomeCtrl"/>
  <span ng-class="homeCtrl.myColor">I'm in a color!</span>
  <span>{{homeCtrl.add(5, 6)}}</span>
</div>
```