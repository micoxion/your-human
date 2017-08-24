function Person(name, age, birthday, gender) {
  if (age != null) {
    if (age < 0) {
      throw new RangeError();
    } else if (typeof age != 'number') {
      throw new TypeError();
    }
  }
  if (birthday != null) {
    if (!(birthday instanceof Date)) {
      throw new TypeError();
    } else if (birthday > new Date()) {
      throw new RangeError();
    }
  }

  if (gender != null && gender.toUpperCase() != "M" && gender.toUpperCase() != "F") {
    throw new RangeError();
  }

  if (name != null && name.length <= 0) {
    throw new RangeError();
  }

  this.age = age || 0;

  this.birthday = birthday || new Date();

  var ranGen = Math.floor(Math.random(2));
  if (ranGen == 1) {
    gender = "F";
  } else {
    gender = "M";
  }
  this.gender = gender.toUpperCase();

  if (gender = "F") {
    this.name = name || "Jane";
  } else {
    this.name = name || "Joe";
  }
}
