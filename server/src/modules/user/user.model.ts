import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

// defination of schema

const userSchema: Schema<IUser> = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: { type: String, requied: true, minLenght: 8 },
	},
	{
		timestamps: true,
	},
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
