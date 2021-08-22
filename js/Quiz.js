class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    question.hide()
    
    background("Yellow")
    
    textsize(30)
    text("Results of the Quiz", 340, 50)
    
    if(allContestants !== undefined) {
      fill("Blue")
      textsize(20)
      text("NOTE: Contestants who answered correctly are highlighted in green color", 130, 230)
    for(var plr in allContestants){
     
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
      display_Answers+=30;
      textSize(20);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    }
  }
  }

}
