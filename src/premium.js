import profile from './profile.js'



export default class Premium extends profile {

    constructor(_id, _name, _gender, _age, _height, _city, _image, _premium, _hobbies) {
        super(_id, _name, _gender, _age, _height, _city, _image, _premium)
        this.hobbies = _hobbies;
    }
}
