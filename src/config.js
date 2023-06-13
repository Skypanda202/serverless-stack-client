const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "akash-app-uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://fu4hlbroe9.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Hz56YQtei",
        APP_CLIENT_ID: "6kitorgars8cfp8k77f9jfdbvb",
        IDENTITY_POOL_ID: "us-east-1:adf6177f-c933-46db-bbdc-d15bc5dec866 ",
    },
};
export default config;
