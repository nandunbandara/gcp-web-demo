import {Schema, model} from 'mongoose';

const noteSchema = new Schema({
  content: {type: String, required: true},
  version: {type: String, required: true},
}, {timestamps: true});

export default model('note', noteSchema);
