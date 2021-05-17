const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "taw-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://un4vq9e36a.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_OFdCqDuGs",
      APP_CLIENT_ID: "ptrc4iph671nm69l6jk6moqq",
      IDENTITY_POOL_ID: "us-east-1:0ca08d2c-b079-454b-a4ab-900187d4b445",
    },
  };
  
  export default config;