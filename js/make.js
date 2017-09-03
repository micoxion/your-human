$(function(){
  var player = new Person();
  $("#make-form").submit(function(){
    var name = $("[name='name']").val();
    var age = $("[name='age']").val();
    var gender = $("select").val();
    var birthday = $("[name='birthday']").val();

    var regex = new RegExp("[0-9]+", 'g');

    var year = regex.exec(birthday);
    var month = moment(regex.exec(birthday), 'MM').format('MMMM');
    var day = regex.exec(birthday);
    birthday = new Date(month + " " + day + ", " + year + ", 01:00:00 PST");

    age = parseInt(age);
    console.log(gender);
    player = new Person(name, age, birthday, gender);
    localStorage.setItem("player", JSON.stringify(player));
    window.location.replace("pages/index.html");
  });

});
