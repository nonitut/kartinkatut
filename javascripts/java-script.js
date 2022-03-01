$(document).ready(function() {
	$('#button').click( function () {
    let rez = $('<div class="popup">+ 350</div>');
    $('#main').append(rez);
    setTimeout( function() { rez.remove(); }, 500);
  });
});

//При клике на кнопку у нас начинается функция с переменной
//$('<div class="popup">+ 350</div>'); - обращение к эллементу
//{ rez.remove(); }, 500); - сначала добавили, а потом удалили
// remove - удалить


$(document).mousemove(function(e) {
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let half_body_size_x = parseInt(body_size_x / 2);
    let half_body_size_y = parseInt(body_size_y / 2);
    let left_dir = e.pageX;
    let top_dir = e.pageY;
    let eq1 = left_dir < half_body_size_x;
    let eq2 = left_dir > half_body_size_x;
    let eq3 = top_dir < half_body_size_y;
    let eq4 = top_dir > half_body_size_y;

    $('#body').html(half_body_size_x + ' + ' + half_body_size_y);
    $('#top').html(top_dir);
    $('#left').html(left_dir);
     if (eq1 && eq3) {
       $('#box').css('background', 'red');
     } else if (eq1 && eq4) {
       $('#box').css('background', 'orange');
     } else if (eq2 && eq3) {
       $('#box').css('background', 'green');
     } else if (eq2 && eq4) {
       $('#box').css('background', 'blue');
     }

  });


// при движении мыши , в зависимости от от положения меняется
// цвет у дива







  $(document).mousemove(function(e) {
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let half_body_size_x = parseInt(body_size_x / 2);
    let half_body_size_y = parseInt(body_size_y / 2);
    let left_dir = e.pageX;
    let top_dir = e.pageY;
    let eq1 = left_dir < half_body_size_x;
    let eq2 = left_dir > half_body_size_x;
    let eq3 = top_dir < half_body_size_y;
    let eq4 = top_dir > half_body_size_y;
    let bg0 = "url('img/0.jpg')";
    let bg1 = "url('img/1.jpg')";
    let bg2 = "url('img/2.jpg')";
    let bg3 = "url('img/3.jpg')";


    $('#body').html(half_body_size_x + ' + ' + half_body_size_y);
    $('#top').html(top_dir);
    $('#left').html(left_dir);
    if (eq1 && eq3) {
      $('#bum').css('background-image', bg0);
    } else if (eq1 && eq4) {
      $('#bum').css('background-image', bg3);
    } else if (eq2 && eq3) {
      $('#bum').css('background-image', bg1);
    } else if (eq2 && eq4) {
      $('#bum').css('background-image', bg2);
    }
  });
