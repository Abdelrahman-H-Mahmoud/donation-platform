const ContentModel = require('../models/content');

module.exports = {
    find(query = {}, skip, limit) {
        return ContentModel.find(query)
            .skip(skip)
            .limit(limit);
    },
    findOne(query = {}) { },
    insertOne(content) { },
    update() { },
    updateOne() { },
    deleteOne() { },
}


const contents = [...Array(100)].map((value,idx) => (
    {
        title: 'content'+idx,
        description: 'describtion' + idx,
        type: idx%2 > 0 ?  'images':'video',
        src: idx%2 > 0 ?  '/images/'+ idx + '.jpg':'/videos/'+ idx + '.mp4',
        donations: [{
            from: idx +'',
            amount: idx,
        }],
        totalDonations: idx,
    }

));

// ContentModel.insertMany(contents);