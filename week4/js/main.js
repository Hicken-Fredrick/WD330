function say() {
    let formData = getFormData("fullForm");
    let elements = formData.elements;
    console.log(elements);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);
    console.log(json);
  }

const getFormData = (name) => {
    const form = document.getElementById(`${name}`);
    return new FormData(form);
}
