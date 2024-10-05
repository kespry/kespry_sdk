/*
 * Firmatek Missions API
 * Missions API for accessing Missions in the Kespry Platform
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FirmatekMissionsApi);
  }
}(this, function(expect, FirmatekMissionsApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Mission', function() {
      beforeEach(function() {
        instance = new FirmatekMissionsApi.Mission();
      });

      it('should create an instance of Mission', function() {
        // TODO: update the code to test Mission
        expect(instance).to.be.a(FirmatekMissionsApi.Mission);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

      it('should have the property capturedAt (base name: "captured_at")', function() {
        // TODO: update the code to test the property capturedAt
        expect(instance).to.have.property('capturedAt');
        // expect(instance.capturedAt).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property outline (base name: "outline")', function() {
        // TODO: update the code to test the property outline
        expect(instance).to.have.property('outline');
        // expect(instance.outline).to.be(expectedValueLiteral);
      });

      it('should have the property missionOutline (base name: "mission_outline")', function() {
        // TODO: update the code to test the property missionOutline
        expect(instance).to.have.property('missionOutline');
        // expect(instance.missionOutline).to.be(expectedValueLiteral);
      });

      it('should have the property operator (base name: "operator")', function() {
        // TODO: update the code to test the property operator
        expect(instance).to.have.property('operator');
        // expect(instance.operator).to.be(expectedValueLiteral);
      });

    });
  });

}));
