var playing=false;
var score;
var lives;
var step,action;
var fruits=['banana','orange','pineapple']
$(document).ready(function()
{
  $("#startreset").click(function()
  {
  //start button is clicked.
  //Game is already being played??

     if(playing==true)
     {
      //yes
            //reload the page
            location.reload();
      }
      else
      {
      //no
      playing=true;
      score=0;
      $("#scorevalue").html(score);
      $("#trialsLeft").show();
      $("#gameOver").hide();
      lives=3;
      heart();
      $("#startreset").html("Reset");
        startAction();
    }
  });

$("#fruit1").mouseover(function()
{
  score++;
  $("#scorevalue").html(score);


//  document.getElementById("slicesound").play();
    clearInterval(action);
$("#fruit1").hide("explode",400);
  setTimeout(startAction, 400);

});


//functions
function heart(){
  $("#trialsLeft").empty();
  for(i=0;i<lives;i++)
  {
    $("#trialsLeft").append("<img class='life' src='heart.png'></img>");
  }
}

//for sending fruits
function startAction()
{
  $("#fruit1").show();
  fruit();
  $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-80})

  step=5+score*(0.1);

  action=setInterval(function()
{
  $("#fruit1").css('top',$("#fruit1").position().top+step);

  if($("#fruit1").position().top>$("#fruitsContainer").height())
  {
    if(lives>1)
    {
      $(".fruit").show();
      fruit();
      $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-80})

      step=5+score*(0.1);

      //
      lives--;

      heart();
    }
    else {
      playing=false;
      $("#gameOver").show();
      $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
      $("#trialsLeft").hide();
      $("#startreset").html("Start");
     stopAction();
        }
  }

},10)
}
function fruit()
{
  $("#fruit1").attr('src',fruits[Math.round(2*Math.random())]+'.png');
}
function stopAction()
{
  clearInterval(action);
  $("#fruit1").hide();
}

}
);
