# FirmatekMissionsApi.Mission

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Mission ID | 
**uid** | **String** | Internal image ID used by support | [optional] 
**capturedAt** | **String** | Date the mission was captured (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**createdAt** | **String** | Date the mission was created (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**updatedAt** | **String** | Date the mission was updated (UTC, format 'YYYY-MM-DD HH:MM:SS') | [optional] 
**status** | **String** | Mission status. Values are pending, pending_gps_update, waiting_for_gps_data, complete, preprocessing, waiting_for_upload, processing_error, or manual_processing | [optional] 
**outline** | **Object** | Mission outline as a GeoJSON geometry (Polygon) in WGS84, e.g. {\"type\": \"Polygon\", \"coordinates\": [[[lng, lat], ...]]} | [optional] 
**missionOutline** | **Object** | Flight/mission boundary as a GeoJSON geometry (Polygon) in WGS84 | [optional] 
**operator** | **String** | Name of the flight operator | [optional] 


