const aws = require('aws-sdk');

const ses = new aws.SES({
    apiVersion: 'latest',
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  });

  