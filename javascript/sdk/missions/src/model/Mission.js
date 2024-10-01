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
    root.FirmatekMissionsApi.Mission = factory(root.FirmatekMissionsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Mission model module.
   * @module model/Mission
   * @version 1.0
   */

  /**
   * Constructs a new <code>Mission</code>.
   * @alias module:model/Mission
   * @class
   * @param id {Number} Mission ID
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>Mission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Mission} obj Optional instance to populate.
   * @return {module:model/Mission} The populated <code>Mission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('uid'))
        obj.uid = ApiClient.convertToType(data['uid'], 'String');
      if (data.hasOwnProperty('captured_at'))
        obj.capturedAt = ApiClient.convertToType(data['captured_at'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('locked'))
        obj.locked = ApiClient.convertToType(data['locked'], 'String');
      if (data.hasOwnProperty('hidden'))
        obj.hidden = ApiClient.convertToType(data['hidden'], 'String');
      if (data.hasOwnProperty('outline'))
        obj.outline = ApiClient.convertToType(data['outline'], Object);
      if (data.hasOwnProperty('mission_outline'))
        obj.missionOutline = ApiClient.convertToType(data['mission_outline'], Object);
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
    }
    return obj;
  }

  /**
   * Mission ID
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Fly ID
   * @member {String} uid
   */
  exports.prototype.uid = undefined;

  /**
   * Date the mission was captured
   * @member {String} capturedAt
   */
  exports.prototype.capturedAt = undefined;

  /**
   * Date the mission was created
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Date the mission was updated
   * @member {String} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Mission status
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Is this mission locked
   * @member {String} locked
   */
  exports.prototype.locked = undefined;

  /**
   * Hidden TODO: Remove this from here...
   * @member {String} hidden
   */
  exports.prototype.hidden = undefined;

  /**
   * Mission outline as a GeoJson format in WGS84
   * @member {Object} outline
   */
  exports.prototype.outline = undefined;

  /**
   * Mission outline as a GeoJson format in WGS84
   * @member {Object} missionOutline
   */
  exports.prototype.missionOutline = undefined;

  /**
   * Name of the flight operator
   * @member {String} operator
   */
  exports.prototype.operator = undefined;


  return exports;

}));
