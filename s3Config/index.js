const { AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY } = require('../env'),
  aws = require('aws-sdk'),
  multer = require('multer'),
  multerS3 = require('multer-s3')

aws.config.update({
  accessKeyId: AWS_ACESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACESS_KEY,
  region: 'us-west-2',
})

const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'michelangelostestbucket',
    acl: 'bucket-owner-read',
    metadata: (req, file, cb) => cb(null, { fieldName: 'Testing Meta Data!' }),
  }),
  key: (req, file, cb) => cb(null, Date.now().toString()),
})

module.exports = upload
