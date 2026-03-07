import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INote extends Document {
	title: string;
	content: string;
	user: mongoose.Types.ObjectId;
	tags: string[];
	isPinned: boolean;
	createdAt: Date;
	updateAt: Date;
}

const noteSchema = new Schema<INote>(
	{
		title: { type: String, required: true, trim: true },
		content: { type: String },
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		tags: {
			type: [String],
			default: [],
		},
		isPinned: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

const Note: Model<INote> = mongoose.model<INote>('Note', noteSchema);

export default Note;
