const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [3, 'name length should be more than 2 characters']
    },
    type: {
        type: String,
        required: [true, 'type is required'],
        minlength: [3, 'type length should be more than 2 characters']
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        minlength: [3, 'description length should be more than 2 characters']
    },
/*    skills: {
        type: [String],
        validate: {
            validator: function (v) {
                return v.length <= 3
            },
            message: '3 skills maximum'
        }
    },
*/    
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
    }, 
    {timestamps: true}
);

function skillsLimit(skills){
    return skills.length <= 3;
}

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;