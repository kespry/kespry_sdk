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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FirmatekMissionsApi) {
      root.FirmatekMissionsApi = {};
    }
    root.FirmatekMissionsApi.Marker = factory(root.FirmatekMissionsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Marker model module.
   * @module model/Marker
   * @version 1.0
   */

  /**
   * Constructs a new <code>Marker</code>.
   * @alias module:model/Marker
   * @class
   * @param id {Number} Marker ID
   * @param imageId {Number} Mission ID
   */
  var exports = function(id, imageId) {
    this.id = id;
    this.imageId = imageId;
  };

  /**
   * Constructs a <code>Marker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Marker} obj Optional instance to populate.
   * @return {module:model/Marker} The populated <code>Marker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('image_id'))
        obj.imageId = ApiClient.convertToType(data['image_id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('marker_type'))
        obj.markerType = ApiClient.convertToType(data['marker_type'], 'Number');
      if (data.hasOwnProperty('shape_type'))
        obj.shapeType = ApiClient.convertToType(data['shape_type'], 'String');
      if (data.hasOwnProperty('pile_id'))
        obj.pileId = ApiClient.convertToType(data['pile_id'], 'Number');
      if (data.hasOwnProperty('known_surface_id'))
        obj.knownSurfaceId = ApiClient.convertToType(data['known_surface_id'], 'Number');
      if (data.hasOwnProperty('density'))
        obj.density = ApiClient.convertToType(data['density'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('fixed_elevation'))
        obj.fixedElevation = ApiClient.convertToType(data['fixed_elevation'], 'Number');
      if (data.hasOwnProperty('geojson'))
        obj.geojson = ApiClient.convertToType(data['geojson'], Object);
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'String');
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ApiClient.convertToType(data['created_by'], 'String');
      if (data.hasOwnProperty('updated_by'))
        obj.updatedBy = ApiClient.convertToType(data['updated_by'], 'String');
      if (data.hasOwnProperty('locked'))
        obj.locked = ApiClient.convertToType(data['locked'], 'Boolean');
      if (data.hasOwnProperty('is_manual'))
        obj.isManual = ApiClient.convertToType(data['is_manual'], 'Boolean');
      if (data.hasOwnProperty('use_extracted'))
        obj.useExtracted = ApiClient.convertToType(data['use_extracted'], 'Boolean');
      if (data.hasOwnProperty('product_id'))
        obj.productId = ApiClient.convertToType(data['product_id'], 'Number');
      if (data.hasOwnProperty('volume_mode'))
        obj.volumeMode = ApiClient.convertToType(data['volume_mode'], 'String');
      if (data.hasOwnProperty('volume'))
        obj.volume = ApiClient.convertToType(data['volume'], Object);
      if (data.hasOwnProperty('defeatured_volume'))
        obj.defeaturedVolume = ApiClient.convertToType(data['defeatured_volume'], Object);
      if (data.hasOwnProperty('base_points'))
        obj.basePoints = ApiClient.convertToType(data['base_points'], Object);
    }
    return obj;
  }

  /**
   * Marker ID
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Mission ID
   * @member {Number} imageId
   */
  exports.prototype.imageId = undefined;

  /**
   * Marker name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Marker description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Marker type
   * @member {Number} markerType
   */
  exports.prototype.markerType = undefined;

  /**
   * Marker type
   * @member {String} shapeType
   */
  exports.prototype.shapeType = undefined;

  /**
   * Pile ID
   * @member {Number} pileId
   */
  exports.prototype.pileId = undefined;

  /**
   * Pile ID
   * @member {Number} knownSurfaceId
   */
  exports.prototype.knownSurfaceId = undefined;

  /**
   * Pile ID
   * @member {Number} density
   */
  exports.prototype.density = undefined;

  /**
   * Pile ID
   * @member {Number} offset
   */
  exports.prototype.offset = undefined;

  /**
   * Pile ID
   * @member {Number} fixedElevation
   */
  exports.prototype.fixedElevation = undefined;

  /**
   * Geometry of the marker as a GeoJson format in WGS84
   * @member {Object} geojson
   */
  exports.prototype.geojson = undefined;

  /**
   * Date the marker was created
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Date the marker was update
   * @member {String} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * User who created the marker
   * @member {String} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * User who last updated the marker
   * @member {String} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  /**
   * Is the marker locked
   * @member {Boolean} locked
   */
  exports.prototype.locked = undefined;

  /**
   * Is the marker manual or assigned to an inventory product
   * @member {Boolean} isManual
   */
  exports.prototype.isManual = undefined;

  /**
   * Is the marker locked
   * @member {Boolean} useExtracted
   */
  exports.prototype.useExtracted = undefined;

  /**
   * ID of the product
   * @member {Number} productId
   */
  exports.prototype.productId = undefined;

  /**
   * Volume mode for the marker if it is a volume based marker
   * @member {String} volumeMode
   */
  exports.prototype.volumeMode = undefined;

  /**
   * Volume mode for the marker if it is a volume based marker
   * @member {Object} volume
   */
  exports.prototype.volume = undefined;

  /**
   * Volume mode for the marker if it is a volume based marker
   * @member {Object} defeaturedVolume
   */
  exports.prototype.defeaturedVolume = undefined;

  /**
   * Volume mode for the marker if it is a volume based marker
   * @member {Object} basePoints
   */
  exports.prototype.basePoints = undefined;


  return exports;

}));
