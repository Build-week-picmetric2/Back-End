const db = require('../../../db/dbConfig')

const addImage = async image => await db('images').insert(image, ['key'])

// SELECT i.image_id, category, name, url, description
// FROM categories AS c
// INNER JOIN images AS i
// ON c.category_id = i.category_id
// WHERE i.user_id = 1;

const getImageArray = async user_id =>
  await db
    .select('i.image_id', 'url', 'name', 'description', 'category')
    .from('categories AS c')
    .innerJoin('images AS i', 'c.category_id', 'i.category_id')
    .where('i.user_id', user_id)

const updateImage = async (image_id, photo_data) => {
  const category = await db('categories')
    .where('category', photo_data.category)
    .first()
    .catch(e => false)

  if (category && photo_data.name)
    return (
      await db('images')
        .where('image_id', image_id)
        .update({ category_id: category.category_id, name: photo_data.name }, [
          'name',
          'url',
        ])
    )[0]

  if (category && !photo_data.name)
    return (
      await db('images')
        .where('image_id', image_id)
        .update({ category_id: category.category_id }, ['name', 'url'])
    )[0]

  if (!category && photo_data.name)
    return (
      await db('images')
        .where('image_id', image_id)
        .update({ name: photo_data.name }, ['name', 'url'])
    )[0]

  throw new Error('Must send a name, category or both')
}

const deleteImage = async image_id =>
  await db('images')
    .where('image_id', image_id)
    .del()

module.exports = { addImage, getImageArray, updateImage, deleteImage }
