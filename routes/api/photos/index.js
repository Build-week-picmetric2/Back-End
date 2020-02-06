const router = require('express-promise-router')(),
  { AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY } = require('../../../env'),
  {
    addImage,
    getImageArray,
    updateImage,
    deleteImage,
    getImagePredictions,
  } = require('./model'),
  { checkUserAccess, checkPutBody } = require('./middleware'),
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
      bucket: 'picmetric2-v1',
      acl: 'public-read',
      metadata: (req, file, cb) =>
        cb(null, {
          originalName: file.originalname,
        }),
    }),
  }),
  imageUpload = upload.single('image')

// router starts here

module.exports = router

router.post('/', (req, res) => {
  imageUpload(req, res, err => {
    if (err) throw new Error(err)
    if (req.file) {
      addImage({
        url: req.file.location,
        name: req.file.metadata.originalName,
        key: req.file.key,
        user_id: req.decodedToken.subject,
        category_id: 1,
      }).catch(err => {
        throw new Error(err)
      })
      return res.status(201).json({
        message: `${req.file.metadata.originalName} saved successfully!`,
      })
    } else throw new Error('You forgot to send an image!')
  })
})

router.get('/', async (req, res) => {
  res.json(await getImageArray(req.decodedToken.subject))
})

router.get('/:id', checkUserAccess, async (req, res) => {
  res.json(await getImagePredictions(req.params.id))
})

router.put('/:id', checkUserAccess, checkPutBody, async (req, res) =>
  res.json(await updateImage(req.params.id, req.body))
)

router.delete('/:id', checkUserAccess, async (req, res) => {
  const deletedImage = await deleteImage(req.params.id)
  if (deletedImage)
    s3.deleteObject(
      { Bucket: 'picmetric2-v1', Key: req.body.key },
      (err, data) => {
        if (err) throw new Error('Problem deleting from S3!')
        return res.json({ message: 'Image deleted successfully!' })
      }
    )
  else return res.json({ message: 'No image with that id!' })
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })
)
