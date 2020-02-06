const server = require('../../../index'),
  request = require('supertest'),
  { TEST_USERNAME, TEST_PASSWORD } = require('../../../env'),
  db = require('../../../db/dbConfig')

describe('photosRouter', () => {
  let token
  let imgId
  beforeAll(async done => {
    try {
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
    } catch (error) {
      console.log(error)
    }
  })

  describe('/ POST', () => {
    test('upload image', async () => {
      const res = await request(server)
        .post('/api/photos')
        .set('authorization', token)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .attach('image', __dirname + '/testImg/forest-931706_1920.jpg')

      imgId = (await db('images').where('name', 'forest-931706_1920.jpg'))[1]
        .image_id

      expect(res.status).toBe(201)
      expect(imgId).toBe(13)
    })
  })

  describe('/ GET', () => {
    test('get image array', async () => {
      const res = await request(server)
        .get('/api/photos')
        .set('authorization', token)

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text).length).toBe(6)
    })
  })

  describe('/:id PUT', () => {
    test('Change image name, category and description', async () => {
      const res = await request(server)
        .put('/api/photos/4')
        .set('authorization', token)
        .send({
          category: 'radical',
          name: 'Milky Way',
          description: 'testing123',
        })

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text).name).toBe('Milky Way')
      expect(JSON.parse(res.text).description).toBe('testing123')
    })

    test('Change image name', async () => {
      const res = await request(server)
        .put('/api/photos/4')
        .set('authorization', token)
        .send({
          name: 'Milky Way Galaxy',
        })

      expect(res.status).toBe(200)
      expect(JSON.parse(res.text)).toMatchObject({
        category_id: 4,
        description: 'testing123',
        name: 'Milky Way Galaxy',
      })
    })

    test('send with empty body', async () => {
      const res = await request(server)
        .put('/api/photos/4')
        .set('authorization', token)

      expect(res.status).toBe(500)
      expect(JSON.parse(res.text)).toMatchObject({
        error: 'Must send any combination of name, description, or category',
        message: 'Uh Oh! 500 Error!',
      })
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
