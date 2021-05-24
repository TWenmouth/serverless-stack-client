const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IqHoRLNNxfgiKF3VmyNWbGaIFzwTfDwKZuytZY8d1O78QDQVcV6d57hkGd8xL0eHkThKE1gWeiekg7PVzOU2tON000QVOKlGN",
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