# FirmatekMissionsApi.V1Api

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarkerVolumes**](V1Api.md#getMarkerVolumes) | **GET** /missions/v1/sites/{site_id}/missions/{mission_id}/volumes | 
[**getMarkers**](V1Api.md#getMarkers) | **GET** /missions/v1/sites/{site_id}/missions/{mission_id}/markers | 
[**getMissions**](V1Api.md#getMissions) | **GET** /missions/v1/sites/{site_id}/missions | 
[**getMissionsLatestForSite**](V1Api.md#getMissionsLatestForSite) | **GET** /missions/v1/sites/{site_id}/missions/latest | 
[**getSites**](V1Api.md#getSites) | **GET** /missions/v1/sites | 


<a name="getMarkerVolumes"></a>
# **getMarkerVolumes**
> [MarkerVolume] getMarkerVolumes(missionId, siteId)



Returns all volumes for the specified mission. Note that markers of type model volume (marker_type=2) may return two records if multiple surfaces are specified. This data should match the data retrieved from the CSV download from the Volume Report.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.V1Api();

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarkerVolumes(missionId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**[MarkerVolume]**](MarkerVolume.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarkers"></a>
# **getMarkers**
> [Marker] getMarkers(missionId, siteId)



Returns all markers for the specified mission

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.V1Api();

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarkers(missionId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**[Marker]**](Marker.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMissions"></a>
# **getMissions**
> [Mission] getMissions(siteId)



Returns all missions for the specified site that are less than 90 days old.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.V1Api();

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMissions(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 

### Return type

[**[Mission]**](Mission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMissionsLatestForSite"></a>
# **getMissionsLatestForSite**
> Mission getMissionsLatestForSite(siteId)



Returns the latest mission for the specified site (if there are any that are less than 90 days old).

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.V1Api();

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMissionsLatestForSite(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 

### Return type

[**Mission**](Mission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSites"></a>
# **getSites**
> [Site] getSites()



Returns all Sites

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSites(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Site]**](Site.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

