function findPossiblePositions() {
    var x = document.getElementById("xInput").value;
    var y = document.getElementById("yInput").value;
    if(x.length==0){
        alert("Please enter input x");
        return;
    } 
   else if(y.length==0){
        alert("Please enter input y");
        return;
        }
     else{
    var possiblePositions = [];
    // Move up 2 and right 1
    if (x - 2 >= 0 && y + 1 < 8) {
        let newPos = [x - 2, y + 1];
        possiblePositions.push(newPos);
      }
      // Move up 2 and left 1
      if (x - 2 >= 0 && y - 1 >= 0) {
        let newPos = [x - 2, y - 1];
        possiblePositions.push(newPos);
      }
      // Move right 2 and up 1
      if (x - 1 >= 0 && y + 2 < 8) {
        let newPos = [x - 1, y + 2];
        possiblePositions.push(newPos);
      }
      // Move right 2 and down 1
      if (x + 1 < 8 && y + 2 < 8) {
        let newPos = [x + 1, y + 2];
        possiblePositions.push(newPos);
      }
      // Move down 2 and right 1
      if (x + 2 < 8 && y + 1 < 8) {
        let newPos = [x + 2, y + 1];
        possiblePositions.push(newPos);
      }
      // Move down 2 and left 1
      if (x + 2 < 8 && y - 1 >= 0) {
        let newPos = [x + 2, y - 1];
        possiblePositions.push(newPos);
      }
      // Move left 2 and up 1
      if (x - 1 >= 0 && y - 2 >= 0) {
        let newPos = [x - 1, y - 2];
        possiblePositions.push(newPos);
      }
      // Move left 2 and down 1
      if (x + 1 < 8 && y - 2 >= 0) {
        let newPos = [x + 1, y - 2];
        possiblePositions.push(newPos);
      }
    var output1="";
    possiblePositions.forEach((item)=>{
        output1+="("+item[0]+" , "+item[1]+")";
    })
  
    document.getElementById("output").innerHTML = output1;

    var chessboard = '';
    var index=1;
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
          chessboard += '<div class="white-square" id=""></div>';
          index++;
        } else {
          chessboard += '<div class="black-square"id=""></div>';
          index++;
        }
      }
    
    }
    document.getElementById('chessboard').innerHTML = chessboard;
  }
}