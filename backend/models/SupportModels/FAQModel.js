import mongoose from "mongoose";

const faqSchema = mongoose.Schema(
    {
        Question:{
            type: String,
            required: true,
        },
        Answer:{
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

export const faq = mongoose.model('faq',faqSchema);
