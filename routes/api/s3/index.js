const router = require('express-promise-router')(),
  upload = require('../../../s3Config'),
  imageUpload = upload.single('image')

module.exports = router

router.post('/', (req, res) => {
  imageUpload(req, res, err => {
    if (err) {
      throw new Error('Could not upload!')
    }
    return res.json({ imageURL: req.file.location })
  })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
