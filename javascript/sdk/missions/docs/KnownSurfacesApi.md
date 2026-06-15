# FirmatekMissionsApi.KnownSurfacesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKnownSurfaceDetail**](KnownSurfacesApi.md#getKnownSurfaceDetail) | **GET** /known-surfaces/v1/sites/{site_id}/known-surfaces/{known_surface_id} | 
[**getKnownSurfaceList**](KnownSurfacesApi.md#getKnownSurfaceList) | **GET** /known-surfaces/v1/sites/{site_id}/known-surfaces | 


<a name="getKnownSurfaceDetail"></a>
# **getKnownSurfaceDetail**
> KnownSurface getKnownSurfaceDetail(knownSurfaceId, siteId)



Returns a single known surface by ID. The known surface must be active on the specified site.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.KnownSurfacesApi();

var knownSurfaceId = 56; // Number | ID of the known surface

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKnownSurfaceDetail(knownSurfaceId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **knownSurfaceId** | **Number**| ID of the known surface | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**KnownSurface**](KnownSurface.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKnownSurfaceList"></a>
# **getKnownSurfaceList**
> [KnownSurface] getKnownSurfaceList(siteId)



Returns all active known surfaces for the specified site.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.KnownSurfacesApi();

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKnownSurfaceList(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 

### Return type

[**[KnownSurface]**](KnownSurface.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

