const db = require('../../../db/dbConfig')

const addImage = async image => await db('photos').insert(image, ['key'])

// SELECT person, category, name, url
// FROM categories AS c
// INNER JOIN photos AS p
// ON c.category_id = p.category_id
// INNER JOIN people_bools AS pb
// on p.people_bool_id = pb.people_bool_id
// WHERE p.user_id = 1;

const getImageArray = async user_id =>
  await db
    .select('name', 'url', 'person', 'category')
    .from('categories AS c')
    .innerJoin('photos AS p', 'c.category_id', 'p.category_id')
    .innerJoin('people_bools AS pb', 'p.people_bool_id', 'pb.people_bool_id')
    .where('p.user_id', user_id)

const updateImage = async (photo_id, photo_data) => {
  const category = await db('categories')
    .where('category', photo_data.category)
    .first()
    .catch(e => false)

  if (category && photo_data.name)
    return (
      await db('photos')
        .where('photo_id', photo_id)
        .update({ category_id: category.category_id, name: photo_data.name }, [
          'name',
          'url',
        ])
    )[0]

  if (category && !photo_data.name)
    return (
      await db('photos')
        .where('photo_id', photo_id)
        .update({ category_id: category.category_id }, ['name', 'url'])
    )[0]

  if (!category && photo_data.name)
    return (
      await db('photos')
        .where('photo_id', photo_id)
        .update({ name: photo_data.name }, ['name', 'url'])
    )[0]

  throw new Error('Must send a name, category or both')
}

const deleteImage = async photo_id =>
  await db('photos')
    .where('photo_id', photo_id)
    .del()

module.exports = { addImage, getImageArray, updateImage, deleteImage }
