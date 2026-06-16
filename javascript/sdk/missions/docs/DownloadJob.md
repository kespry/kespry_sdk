# FirmatekMissionsApi.DownloadJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobId** | **String** | Download job ID; use it to poll status | 
**createdAt** | **String** | Job creation time (UTC, ISO-8601, e.g. 2026-06-10T17:01:30Z) | [optional] 
**status** | **String** | Job status: NEW, PENDING, QUEUED, STARTED, RUNNING, SCHEDULED, SUCCESS, FAILED, or STOPPED | [optional] 
**name** | **String** | Download type | [optional] 
**options** | **Object** | Options the job was created with | [optional] 
**presignedUrl** | **String** | Time-limited (15-minute) S3 URL to download the output file; null until the job succeeds | [optional] 
**fileStatus** | **String** | 'exists' when the output file is present, 'missing' if it is gone/expired, 'unknown' before the job produces output | [optional] 


