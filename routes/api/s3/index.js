const router = require('express-promise-router')(),
  { AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY } = require('../../../env'),
  aws = require('aws-sdk'),
  s3 = new aws.S3({
    accessKeyId: AWS_ACESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACESS_KEY,
    region: 'us-west-2',
  }),
  multer = require('multer'),
  multerS3 = require('multer-s3'),
  upload = multer({
    storage: multerS3({
      s3,
      bucket: 'michelangelostestbucket',
      acl: 'public-read',
      metadata: (req, file, cb) => {
        cb(null, {
          originalName: req.headers.name || file.originalname,
        })
      },
    }),
    key: (req, file, cb) => cb(null, Date.now().toString()),
  }),
  imageUpload = upload.single('image')

// router starts here

module.exports = router

router.post('/', (req, res) => {
  imageUpload(req, res, err => {
    if (err) {
      throw new Error('Could not upload!')
    }
    console.log('hopefully can throw this in database', {
      imageURL: req.file.location,
      metadata: req.file.metadata,
      key: req.file.key,
    })
    return res.json({
      imageURL: req.file.location,
      metadata: req.file.metadata,
      key: req.file.key,
    })
  })
})

// *** This gets a response of an image's metadata using it's key***
// router.get('/', (req, res) => {
//   const params = {
//     Bucket: 'michelangelostestbucket',
//     Key: 'cfa2b939b3f1cc128813f9fbcc4d2337',
//   } // keyname can be a filename
//   s3.getObject(params, function(err, data) {
//     if (err) {
//       return res.send({ error: err })
//     }
//     res.send(data.Metadata)
//   })
// })

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
