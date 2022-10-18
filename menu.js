"use stricts";

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active') //По клику на элемент мы добавим к нему класс .active если он не имел этого класса, па если он был активен, то удалим.
  })
});
