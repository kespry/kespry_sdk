# FirmatekMissionsApi.ComparisonSurface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Comparison surface record ID | 
**comparisonSurfaceId** | **Number** | ID of the referenced surface (known surface or image) | [optional] 
**comparisonSurfaceType** | **String** | Surface type: BasePoints, Image, FixedElevation, or KnownSurface | [optional] 
**name** | **String** | Display name of the comparison surface | [optional] 
**elevation** | **String** | Fixed elevation value when comparison_surface_type is FixedElevation | [optional] 
**geojson** | **Object** | Geometry of the comparison surface as a GeoJSON object in WGS84 | [optional] 


