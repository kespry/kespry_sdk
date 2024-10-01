# ApplicationAuthorizationApi.V1Api

All URIs are relative to *https://localhost/api/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postLogin**](V1Api.md#postLogin) | **POST** /v1/ | 


<a name="postLogin"></a>
# **postLogin**
> Auth postLogin(grantType, opts)



### Example
```javascript
var ApplicationAuthorizationApi = require('application_authorization_api');
var defaultClient = ApplicationAuthorizationApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ApplicationAuthorizationApi.V1Api();

var grantType = "client_credentials"; // String | Grant type

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
apiInstance.postLogin(grantType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant type | [default to client_credentials]
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Auth**](Auth.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

