const contentRepo = require('../repos/content');

async function getAll(query, skip, limit) {

    const contents = await contentRepo.find(query, skip, limit);

    return { contents };
}

module.exports={
    getAll
}

