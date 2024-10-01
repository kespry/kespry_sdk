# FirmatekMissionsApi.V1Api

All URIs are relative to *https://localhost/api/missions*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarkerVolumes**](V1Api.md#getMarkerVolumes) | **GET** /v1/sites/{site_id}/missions/{mission_id}/volumes | 
[**getMarkers**](V1Api.md#getMarkers) | **GET** /v1/sites/{site_id}/missions/{mission_id}/markers | 
[**getMissions**](V1Api.md#getMissions) | **GET** /v1/sites/{site_id}/missions | 
[**getMissionsLatestForSite**](V1Api.md#getMissionsLatestForSite) | **GET** /v1/sites/{site_id}/missions/latest | 
[**getSites**](V1Api.md#getSites) | **GET** /v1/sites | 


<a name="getMarkerVolumes"></a>
# **getMarkerVolumes**
> [MarkerVolume] getMarkerVolumes(missionId, siteId, opts)



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

var opts = { 
  'xFields': "xFields_example" // String | An optional fields mask
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarkerVolumes(missionId, siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**[MarkerVolume]**](MarkerVolume.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarkers"></a>
# **getMarkers**
> [Marker] getMarkers(missionId, siteId, opts)



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

var opts = { 
  'xFields': "xFields_example" // String | An optional fields mask
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarkers(missionId, siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**[Marker]**](Marker.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMissions"></a>
# **getMissions**
> [Mission] getMissions(siteId, opts)



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

var opts = { 
  'xFields': "xFields_example" // String | An optional fields mask
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMissions(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**[Mission]**](Mission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMissionsLatestForSite"></a>
# **getMissionsLatestForSite**
> Mission getMissionsLatestForSite(siteId, opts)



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

var opts = { 
  'xFields': "xFields_example" // String | An optional fields mask
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMissionsLatestForSite(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Mission**](Mission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSites"></a>
# **getSites**
> [Site] getSites(opts)



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

var opts = { 
  'xFields': "xFields_example" // String | An optional fields mask
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSites(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**[Site]**](Site.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

