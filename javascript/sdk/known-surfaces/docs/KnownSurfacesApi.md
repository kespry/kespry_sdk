# FirmatekKnownSurfacesApi.KnownSurfacesApi

All URIs are relative to *https://localhost/api/known-surfaces*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKnownSurfaceDetail**](KnownSurfacesApi.md#getKnownSurfaceDetail) | **GET** /v1/sites/{site_id}/known-surfaces/{known_surface_id} | 
[**getKnownSurfaceList**](KnownSurfacesApi.md#getKnownSurfaceList) | **GET** /v1/sites/{site_id}/known-surfaces | 


<a name="getKnownSurfaceDetail"></a>
# **getKnownSurfaceDetail**
> KnownSurface getKnownSurfaceDetail(knownSurfaceId, siteId)



Returns a single known surface by ID. The known surface must be active on the specified site.

### Example
```javascript
var FirmatekKnownSurfacesApi = require('firmatek_known_surfaces_api');
var defaultClient = FirmatekKnownSurfacesApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekKnownSurfacesApi.KnownSurfacesApi();

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
var FirmatekKnownSurfacesApi = require('firmatek_known_surfaces_api');
var defaultClient = FirmatekKnownSurfacesApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekKnownSurfacesApi.KnownSurfacesApi();

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

