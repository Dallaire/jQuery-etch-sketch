function create(size){
  var count=(size*size);
  for (i=0;i<count;i++){
    $('<div class="tile"></div>').appendTo('.field');
  }
  $('.tile').width(500/size);
  $('.tile').height(500/size);
  $('.tile').css("background-color", '#EEE');
  $('.tile').css('float','left');
  $('.tile').css('margin','0');
  $('.tile').css('padding','0');
}

function color(){
    var hash='0123456789ABCDEF'
    var color='#'
    for(i=0;i<6;i++){
      color+=hash[Math.floor(Math.random()*16)];
    }
    return color;
}

function size(){
  $('.field').empty();
  var size=0;
  while(size<1 || size>100){
    var size=prompt('Pick a grid size between 1 and 100: ');
  }
  main(size);
}

function clearField(){
  $('.tile').css("background-color", '#EEE');
}

var toggle=true;

function toggleColor(){
  toggle=!toggle;
}

function main(size){
  create(size)
  $('.tile').mouseenter(function(){
    if (toggle===true){
      $(this).css("background-color", color());
    }
    else {
      $(this).css("background-color",'#000');
    }
  });
}

$(document).ready(function(){
  main(16);
});
