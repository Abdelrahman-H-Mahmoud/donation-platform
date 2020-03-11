const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContentSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true, default: "images" },
    src: { type: String, required: true },
    donations: [{
        from: { type: String, required: true },
        amount: { type: Number, required: true },
    }],
    totalDonations: { type: Number, default: 0 },
});

ContentSchema.index({ title: "text" });

module.exports = mongoose.model("Contents", ContentSchema);

