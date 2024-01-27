**_NOTE:_** This repository is for the demo I did at the January 2024 meetup of Google Developers Group - Canberra.

# Deploying a Full-stack application on GCP

The application we are deploying has two components. 

1. Angular frontend application
  The web application will be deployed on Cloud Storage.

2. Node.js API
   The Node.js API will be deployed on Cloud Run, which is a serverless, fully-managed service offering on Google Cloud.

**_Note:_** Please feel free to use the code provided here to try this out on your own.

## Setting up the API on Cloud Run

Let's first create a artifact repository on Google Cloud to store the Docker image we build for the Node.js API. I am using gcloud CLI, but you can configure this on the console itself similar to what I followed during the demo.

``


