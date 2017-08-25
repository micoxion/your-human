function Person(name, age, birthday, gender) {

  //validating age
  if (age != null) {
    if (age < 0) {
      throw new RangeError();
    } else if (typeof age != 'number') {
      throw new TypeError();
    }
  }

  //validating birthday
  if (birthday != null) {
    if (!(birthday instanceof Date)) {
      throw new TypeError();
    } else if (birthday > new Date()) {
      throw new RangeError();
    }
  }

  //validating gender
  if (gender != null && gender != "M" && gender != "F") {
    throw new RangeError();
  }

  //validating name
  if (name != null && name.length <= 0) {
    throw new RangeError();
  }

  //set Person age
  this.age = age || 0;

  //set Person birthday
  this.birthday = birthday || new Date();

  //set Person gender
  this.gender = gender || "M";

  //set Person name
  if (gender = "F") {
    this.name = name || "Jane";
  } else {
    this.name = name || "Joe";
  }
}
