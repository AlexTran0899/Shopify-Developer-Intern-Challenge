const db = require('../data/db-config')


function Add(data) { // done for you
    return db('image').insert(data, ['*'])
}
function update(data) { // done for you
    return db('image').where({ image_id: data.image_id }).update(data, ['*'])
}

function original_image(data) { // done for you
    return db('image').where({ user_id: data.user_id }).update(data)
}

function addingTags(url, data) { // done for you
    return db('image').where({ url }).update({tags: data}, ['*'])
}

module.exports = {
    Add,
    update,
    addingTags,
    original_image
}
