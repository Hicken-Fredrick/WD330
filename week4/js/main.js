import { fillForm } from './formBuilder.js'
import { fillSelector } from './localStorage.js'

//fill selector options IMPORT from localStorage
window.onload = fillSelector();

//save the form
function saveForm() {
    let formData = getFormData("fullForm");
    var details = {stuffs:{}};
    formData.forEach((value, key) => details.stuffs[key] = value);
    details[`car${details.stuffs.ownerName}${details.stuffs.carName}${details.stuffs.dateRecieved}`] = details.stuffs;
    delete details.stuffs;
    var json = JSON.stringify(details);
    console.log(json);
    let info = JSON.parse(json)
    console.log(info);
    console.log(Object.keys(details)[0]);
    localStorage.setItem(Object.keys(details)[0], json);
  }

//get form with passed in ID
const getFormData = (name) => {
    const form = document.getElementById(`${name}`);
    return new FormData(form);
}

