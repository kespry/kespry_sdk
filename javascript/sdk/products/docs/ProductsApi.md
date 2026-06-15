# FirmatekProductsApi.ProductsApi

All URIs are relative to *https://localhost/api/products*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductDetail**](ProductsApi.md#getProductDetail) | **GET** /v1/sites/{site_id}/products/{product_id} | 
[**getProductList**](ProductsApi.md#getProductList) | **GET** /v1/sites/{site_id}/products | 


<a name="getProductDetail"></a>
# **getProductDetail**
> Product getProductDetail(productId, siteId)



Returns a single product by ID. The product must belong to the specified site.

### Example
```javascript
var FirmatekProductsApi = require('firmatek_products_api');
var defaultClient = FirmatekProductsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekProductsApi.ProductsApi();

var productId = 56; // Number | ID of the product

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductDetail(productId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Number**| ID of the product | 
 **siteId** | **Number**| ID of the site | 

### Return type

[**Product**](Product.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductList"></a>
# **getProductList**
> [Product] getProductList(siteId)



Returns all products for the specified site.

### Example
```javascript
var FirmatekProductsApi = require('firmatek_products_api');
var defaultClient = FirmatekProductsApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new FirmatekProductsApi.ProductsApi();

var siteId = 56; // Number | ID of the site


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProductList(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **Number**| ID of the site | 

### Return type

[**[Product]**](Product.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

