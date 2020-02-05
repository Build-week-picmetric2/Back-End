const server = require('../../../index'),
  request = require('supertest'),
  { TEST_USERNAME, TEST_PASSWORD } = require('../../../env'),
  db = require('../../../db/dbConfig')

describe('photosRouter', () => {
  let token
  let imgId
  beforeAll(async done => {
    await db.seed.run()
    request(server)
      .post('/api/login')
      .send({
        username: TEST_USERNAME,
        password: TEST_PASSWORD,
      })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  describe('/ POST', () => {
    test('upload image', async () => {
      const res = await request(server)
        .post('/api/photos')
        .set('authorization', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .attach('image', __dirname + '/testImg/forest-931706_1920.jpg')

      imgId = (
        await db('photos')
          .where('key', JSON.parse(res.text).key)
          .first()
      ).photo_id

      expect(res.status).toBe(201)
      expect(JSON.parse(res.text).imageURL).toBeTruthy()
      expect(JSON.parse(res.text).metadata.originalName).toBe(
        'forest-931706_1920.jpg'
      )
      expect(JSON.parse(res.text).key).toBeTruthy()
    })
  })

  describe('/ GET', () => {
    test('get image array', async () => {
      const res = await request(server)
        .get('/api/photos')
        .set('authorization', token)

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text).length).toBe(5)
    })
  })

  describe('/:id PUT', () => {
    test('Change image name and category', async () => {
      const res = await request(server)
        .put('/api/photos/4')
        .set('authorization', token)
        .send({ category: 'radical', name: 'Milky Way' })

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text).name).toBe('Milky Way')
    })
  })

  describe('/:id DELETE', () => {
    test('Delete Image', async () => {
      const res = await request(server)
        .delete(`/api/photos/${imgId}`)
        .set('authorization', token)

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text).message).toBe('Image deleted successfully!')
    })
  })
})
