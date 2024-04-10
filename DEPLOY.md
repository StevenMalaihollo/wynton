# Deployment

Our site is deployed on a Google Cloud Storage bucket and is routed through Google Load balancer. The steps to deploy the code are:

1. `npm run build`
2. Go to the Cloud bucket `wynton-site` content
3. Remove the files/folders `assets`,`favicon.ico` and `index.html`
4. Upload the new files/folders `assets`,`favicon.ico` and `index.html`

## Notes

Changes to the Storage Bucket can take some time to get through. Browser can also cache the assets of course.

Update cors with:
`gcloud storage buckets describe gs://wynton-site --format="default(cors_config)`
`gcloud storage buckets update gs://wynton-site --cors-file=example_cors_file.json`
