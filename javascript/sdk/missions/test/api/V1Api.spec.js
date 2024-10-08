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

  beforeEach(function() {
    instance = new FirmatekMissionsApi.V1Api();
  });

  describe('(package)', function() {
    describe('V1Api', function() {
      describe('getMarkerVolumes', function() {
        it('should call getMarkerVolumes successfully', function(done) {
          // TODO: uncomment, update parameter values for getMarkerVolumes call and complete the assertions
          /*
          var missionId = 56;
          var siteId = 56;

          instance.getMarkerVolumes(missionId, siteId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FirmatekMissionsApi.MarkerVolume);
              expect(data.num).to.be.a('string');
              expect(data.num).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.surfaceDesc).to.be.a('string');
              expect(data.surfaceDesc).to.be("");
              expect(data.sku).to.be.a('string');
              expect(data.sku).to.be("");
              expect(data.surfaceArea).to.be.a('number');
              expect(data.surfaceArea).to.be();
              expect(data.perimeter).to.be.a('number');
              expect(data.perimeter).to.be();
              expect(data.cutVolume).to.be.a('number');
              expect(data.cutVolume).to.be();
              expect(data.fillVolume).to.be.a('number');
              expect(data.fillVolume).to.be();
              expect(data.threshold).to.be.a('number');
              expect(data.threshold).to.be();
              expect(data.offset).to.be.a('number');
              expect(data.offset).to.be();
              expect(data.computedDensity).to.be.a('number');
              expect(data.computedDensity).to.be();
              expect(data.cutMass).to.be.a('number');
              expect(data.cutMass).to.be();
              expect(data.fillMass).to.be.a('number');
              expect(data.fillMass).to.be();
              expect(data.usesExtracted).to.be.a('boolean');
              expect(data.usesExtracted).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMarkers', function() {
        it('should call getMarkers successfully', function(done) {
          // TODO: uncomment, update parameter values for getMarkers call and complete the assertions
          /*
          var missionId = 56;
          var siteId = 56;

          instance.getMarkers(missionId, siteId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FirmatekMissionsApi.Marker);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.imageId).to.be.a('number');
              expect(data.imageId).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.markerType).to.be.a('number');
              expect(data.markerType).to.be(0);
              expect(data.shapeType).to.be.a('string');
              expect(data.shapeType).to.be("");
              expect(data.pileId).to.be.a('number');
              expect(data.pileId).to.be(0);
              expect(data.knownSurfaceId).to.be.a('number');
              expect(data.knownSurfaceId).to.be(0);
              expect(data.density).to.be.a('number');
              expect(data.density).to.be();
              expect(data.offset).to.be.a('number');
              expect(data.offset).to.be();
              expect(data.fixedElevation).to.be.a('number');
              expect(data.fixedElevation).to.be();
              expect(data.geojson).to.be.a(Object);
              expect(data.geojson).to.be();
              expect(data.createdAt).to.be.a('string');
              expect(data.createdAt).to.be("");
              expect(data.updatedAt).to.be.a('string');
              expect(data.updatedAt).to.be("");
              expect(data.createdBy).to.be.a('string');
              expect(data.createdBy).to.be("");
              expect(data.updatedBy).to.be.a('string');
              expect(data.updatedBy).to.be("");
              expect(data.locked).to.be.a('boolean');
              expect(data.locked).to.be(false);
              expect(data.isManual).to.be.a('boolean');
              expect(data.isManual).to.be(false);
              expect(data.useExtracted).to.be.a('boolean');
              expect(data.useExtracted).to.be(false);
              expect(data.productId).to.be.a('number');
              expect(data.productId).to.be(0);
              expect(data.volumeMode).to.be.a('string');
              expect(data.volumeMode).to.be("");
              expect(data.volume).to.be.a(Object);
              expect(data.volume).to.be();
              expect(data.defeaturedVolume).to.be.a(Object);
              expect(data.defeaturedVolume).to.be();
              expect(data.basePoints).to.be.a(Object);
              expect(data.basePoints).to.be();
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMissions', function() {
        it('should call getMissions successfully', function(done) {
          // TODO: uncomment, update parameter values for getMissions call and complete the assertions
          /*
          var siteId = 56;

          instance.getMissions(siteId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FirmatekMissionsApi.Mission);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.uid).to.be.a('string');
              expect(data.uid).to.be("");
              expect(data.capturedAt).to.be.a('string');
              expect(data.capturedAt).to.be("");
              expect(data.createdAt).to.be.a('string');
              expect(data.createdAt).to.be("");
              expect(data.updatedAt).to.be.a('string');
              expect(data.updatedAt).to.be("");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("");
              expect(data.outline).to.be.a(Object);
              expect(data.outline).to.be();
              expect(data.missionOutline).to.be.a(Object);
              expect(data.missionOutline).to.be();
              expect(data.operator).to.be.a('string');
              expect(data.operator).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMissionsLatestForSite', function() {
        it('should call getMissionsLatestForSite successfully', function(done) {
          // TODO: uncomment, update parameter values for getMissionsLatestForSite call and complete the assertions
          /*
          var siteId = 56;

          instance.getMissionsLatestForSite(siteId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FirmatekMissionsApi.Mission);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.uid).to.be.a('string');
            expect(data.uid).to.be("");
            expect(data.capturedAt).to.be.a('string');
            expect(data.capturedAt).to.be("");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("");
            expect(data.updatedAt).to.be.a('string');
            expect(data.updatedAt).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.outline).to.be.a(Object);
            expect(data.outline).to.be();
            expect(data.missionOutline).to.be.a(Object);
            expect(data.missionOutline).to.be();
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSites', function() {
        it('should call getSites successfully', function(done) {
          // TODO: uncomment getSites call and complete the assertions
          /*

          instance.getSites(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FirmatekMissionsApi.Site);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.customerId).to.be.a('number');
              expect(data.customerId).to.be(0);
              expect(data.centerLat).to.be.a('number');
              expect(data.centerLat).to.be();
              expect(data.centerLng).to.be.a('number');
              expect(data.centerLng).to.be();
              expect(data.outline).to.be.a(Object);
              expect(data.outline).to.be();
              expect(data.createdAt).to.be.a('string');
              expect(data.createdAt).to.be("");
              expect(data.updateAt).to.be.a('string');
              expect(data.updateAt).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
