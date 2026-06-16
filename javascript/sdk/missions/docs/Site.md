# FirmatekMissionsApi.Site

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Site ID | 
**name** | **String** | Site name | 
**customerId** | **Number** | Customer ID | 
**centerLat** | **Number** | Center latitude in WGS84 | [optional] 
**centerLng** | **Number** | Center longitude in WGS84 | [optional] 
**outline** | **Object** | Site outline as a GeoJSON geometry (Polygon) in WGS84, e.g. {\"type\": \"Polygon\", \"coordinates\": [[[lng, lat], ...]]} | [optional] 
**createdAt** | **String** | Date the site was created (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**updatedAt** | **String** | Date the site was updated (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**foreignKey** | **String** | Foreign key for the site (for referencing within the customer environment) | [optional] 


