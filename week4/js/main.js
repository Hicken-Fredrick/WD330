function say() {
    let formData = getFormData("fullForm");
    var details = {stuffs:{}};
    formData.forEach((value, key) => details.stuffs[key] = value);
    details[`${details.stuffs.ownerName}${details.stuffs.carName}${details.stuffs.dateRecieved}`] = details.stuffs;
    delete details.stuffs;
    var json = JSON.stringify(details);
    console.log(json);
    let info = JSON.parse(json)
    console.log(info);
    console.log(Object.keys(details)[0]);
    localStorage.setItem(Object.keys(details)[0], json);
  }

const getFormData = (name) => {
    const form = document.getElementById(`${name}`);
    return new FormData(form);
}
