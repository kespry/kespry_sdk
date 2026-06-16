# FirmatekMissionsApi.DownloadsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableDownloads**](DownloadsApi.md#getAvailableDownloads) | **GET** /downloads/v1/sites/{site_id}/missions/{mission_id}/available_downloads | 
[**getDownloadJobStatus**](DownloadsApi.md#getDownloadJobStatus) | **GET** /downloads/v1/sites/{site_id}/missions/{mission_id}/jobs/{download_job_id} | 
[**getDownloadJobsList**](DownloadsApi.md#getDownloadJobsList) | **GET** /downloads/v1/sites/{site_id}/missions/{mission_id}/jobs | 
[**postDownloadJobsList**](DownloadsApi.md#postDownloadJobsList) | **POST** /downloads/v1/sites/{site_id}/missions/{mission_id}/jobs | 


<a name="getAvailableDownloads"></a>
# **getAvailableDownloads**
> [AvailableDownload] getAvailableDownloads(missionId, siteId)



Returns the downloads available for the specified mission, each with its configurable options.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.DownloadsApi();

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableDownloads(missionId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**[AvailableDownload]**](AvailableDownload.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadJobStatus"></a>
# **getDownloadJobStatus**
> DownloadJob getDownloadJobStatus(downloadJobId, missionId, siteId)



Returns the status of a single download job, polling the download service if the job is not yet in a terminal state.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.DownloadsApi();

var downloadJobId = "downloadJobId_example"; // String | ID of the download job

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDownloadJobStatus(downloadJobId, missionId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadJobId** | **String**| ID of the download job | 
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**DownloadJob**](DownloadJob.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownloadJobsList"></a>
# **getDownloadJobsList**
> [DownloadJob] getDownloadJobsList(missionId, siteId, )



Lists the download jobs for the specified mission, refreshing their status from the download service.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.DownloadsApi();

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDownloadJobsList(missionId, siteId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**[DownloadJob]**](DownloadJob.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDownloadJobsList"></a>
# **postDownloadJobsList**
> DownloadJob postDownloadJobsList(missionId, siteId, payload)



Requests (creates) a new download job for the specified mission. download_type must match the 'name' of an available download.

### Example
```javascript
var FirmatekMissionsApi = require('firmatek_missions_api');
var defaultClient = FirmatekMissionsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekMissionsApi.DownloadsApi();

var missionId = 56; // Number | ID of the mission

var siteId = 56; // Number | ID of the site

var payload = new FirmatekMissionsApi.CreateDownloadRequest(); // CreateDownloadRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDownloadJobsList(missionId, siteId, payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **missionId** | **Number**| ID of the mission | 
 **siteId** | **Number**| ID of the site | 
 **payload** | [**CreateDownloadRequest**](CreateDownloadRequest.md)|  | 

### Return type

[**DownloadJob**](DownloadJob.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

