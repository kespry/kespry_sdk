# FirmatekMissionsApi.Marker

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Marker ID | 
**imageId** | **Number** | Mission ID | 
**name** | **String** | Marker name | [optional] 
**description** | **String** | Marker description | [optional] 
**markerType** | **Number** | Marker type,  0: point, 1: cross section, 2: model volume, 3: volume, 4: inventory volume, 5: area, 6: compliance line, 7: markup, 8: external (Firmatek Services) | [optional] 
**shapeType** | **String** | Marker geometry type: Point, LineString or Polygon | [optional] 
**pileId** | **Number** | Pile ID | [optional] 
**knownSurfaceId** | **Number** | ID of the known surface if the volume_mode is \"known_surface\" | [optional] 
**density** | **Number** | Density (kg/m3) | [optional] 
**offset** | **Number** | Volume offset | [optional] 
**fixedElevation** | **Number** | Elevation to use as the base of the pile if the volume_mode is \"fixed_elevation\" (m) | [optional] 
**geojson** | **Object** | Geometry of the marker as a GeoJSON geometry in WGS84, e.g. {\"type\": \"Polygon\", \"coordinates\": [[[lng, lat], ...]]} | [optional] 
**createdAt** | **String** | Date the marker was created (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**updatedAt** | **String** | Date the marker was updated (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**createdBy** | **String** | User who created the marker | [optional] 
**updatedBy** | **String** | User who last updated the marker | [optional] 
**locked** | **Boolean** | Is the marker locked | [optional] 
**isManual** | **Boolean** | Is the marker manual or assigned to an inventory product | [optional] 
**useExtracted** | **Boolean** | When true, reported volumes use the feature extracted DSM data | [optional] 
**productId** | **Number** | ID of the product used if is_manual is False | [optional] 
**volumeMode** | **String** | Volume mode for the marker if it is a volume based marker. Values are base_points, fixed_elevation, known_surface or none | [optional] 
**basePoints** | **Object** | Base points used to define the base of the pile if volume_mode is \"base_points\". Array of [lng, lat, elevation] coordinates in WGS84. | [optional] 
**messages** | **[Object]** | Processing messages. If present is an array of objects of the form { \"code\": \"small_base_points_area\", \"level\": \"warn\", \"message\": \"Your base points only cover a small area. For accurate measurement add more points over a larger area if possible.\"} | [optional] 
**comparisonSurfaces** | [**[ComparisonSurface]**](ComparisonSurface.md) | Comparison surfaces for model volume markers (marker_type=2). Null or absent for all other marker types. | [optional] 


