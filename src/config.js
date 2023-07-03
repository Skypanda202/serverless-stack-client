const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "akash-app-client",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sjms08fhj8.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7wcEyifiJ",
    APP_CLIENT_ID: "4r152f6smetohcmoepruq2c327",
    IDENTITY_POOL_ID: "us-east-1:adf6177f-c933-46db-bbdc-d15bc5dec866",
  },
};

export default config;
