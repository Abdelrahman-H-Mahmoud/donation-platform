const contentRepo = require('../repos/content');
exports = {
    async getAll(query, skip, limit) {

        const contents = await contentRepo.find(query, skip, limit);

        return { contents };
    }
}
