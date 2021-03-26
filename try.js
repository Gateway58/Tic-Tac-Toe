let xsturn = true;
let over = false; 
let winsx = 0; 
let winso = 0; 
let xwn = false;
let own = false;
let count = 0;
let xt = "x's turn";
let ot = "o's turn";
function check(){
let board = [
    [document.getElementById("btnc1r1").innerText, document.getElementById("btnc2r1").innerText, document.getElementById("btnc3r1").innerText],
    [document.getElementById("btnc1r2").innerText, document.getElementById("btnc2r2").innerText, document.getElementById("btnc3r2").innerText], 
    [document.getElementById("btnc1r3").innerText, document.getElementById("btnc2r3").innerText, document.getElementById("btnc3r3").innerText]
];
for(i = 0; i < 3; i++){
   
   
        if(board[i][0] == "X"){
            if(board[i][1] == "X"){
                if(board[i][2] == "X"){
                    console.log("X won");
                    winsx++; 
                    i = 10; 
                    over = true;
                    xwn = true;
                    document.getElementById("scorex").innerHTML = "X: " + winsx;
                    document.getElementById("res").style.visibility = "visible";
                  

                }
                
            }
          
          
        }
        else if(board[i][0] == "O"){
            if(board[i][1] == "O"){
                if(board[i][2] == "O"){
                    winso++;
                    console.log("O won");
                    i = 10; 
                    over = true;
                    own = true;
                    
                    document.getElementById("scoreo").innerHTML = "O: " + winso;
                    document.getElementById("res").style.visibility = "visible";
                   
                }
               
            }
            
          
         
        
        }
          
}
for(j = 0; j <3; j++){
    if(board[0][j] == "X"){
        if(board[1][j] == "X"){
            if(board[2][j] == "X"){
                console.log("X won");
                i = 10; 
                over = true;
                winsx++;
                document.getElementById("scorex").innerHTML = "X: " + winsx;
                document.getElementById("res").style.visibility = "visible";
               
            }
            
        }
       
      
    }
    else if(board[0][j] == "O"){
        if(board[1][j] == "O"){
            if(board[2][j] == "O"){
                console.log("O won");
                j = 10; 
                over = true;
                winso++;
                document.getElementById("scoreo").innerHTML = "O: " + winso;
                document.getElementById("res").style.visibility = "visible";
                
            }
           
        }
        
      
     
    
    }      
}

     if(board[0][0] == board[1][1]){
        if(board[2][2] == board[0][0]){
            if(board[0][0] == "X"){
                console.log("X has won");
                winsx++;
                over = true;
                document.getElementById("scorex").innerHTML = "X: " + winsx;
                document.getElementById("res").style.visibility = "visible";
              
            }
            else if(board[0][0] == "O"){
                console.log("O has won");
                winso++;
                over = true;
                document.getElementById("scoreo").innerHTML = "O: " + winso;
                document.getElementById("res").style.visibility = "visible";
              
            }
            
        }
    }
    
     if(board[0][2] == board[1][1]){
        if(board[2][0] == board[0][2]){
          
            if(board[0][2] == "X"){
                winsx++;
                over = true;
                console.log("X has won");
                document.getElementById("scorex").innerHTML = "X: " + winsx;
                document.getElementById("res").style.visibility = "visible"; 
               
            }
            else if(board[0][2] == "O"){
                console.log("O has won");
                winso++;
                over = true;
                document.getElementById("scoreo").innerHTML = "O: " + winso;
                document.getElementById("res").style.visibility = "visible";
               
            }
        }
    }
     if(over == false)  //checks for ties
    {
    if(board[0][0] == "X" || board[0][0] =="O"){
        if(board[0][1] == "X" ||board[0][1] == "O"){
            if(board[0][2] == "X" ||board[0][2] == "O"){
                if(board[1][0] == "X" || board[1][0] =="O"){
                    if(board[1][1] == "X" ||board[1][1] == "O"){
                        if(board[1][2] == "X" || board[1][2] =="O"){
                            if(board[2][0] == "X" || board[2][0] =="O"){
                                if(board[2][1] == "X" ||board[2][1] == "O"){
                                    if(board[2][2] == "X" || board[2][2] =="O"){
                                        over = true;
                                        document.getElementById("rule").innerHTML = "Tie"; 
                                        document.getElementById("res").style.visibility = "visible";
                                    }
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
} //Checks for ties 

}
function set(id) {
    
 
    let erx = "Space is already taken, please continue x";
    let ero = ot + "Space is already taken, please continue o";
   if(over == false){
    if(document.getElementById(id).innerHTML != "1"){
        console.log(id);
        if(xsturn){
        document.getElementById("rule").innerHTML = erx;
        }
        else if(xsturn == false){
            document.getElementById("rule").innerHTML = ero;
            }
    }
    else if(xsturn){
    document.getElementById(id).innerHTML = "X".fontcolor("White");
    check();
   if(over == false){
    document.getElementById("rule").innerHTML = ot;
    xsturn = false;
   }
    }
    else if(xsturn == false){
        document.getElementById(id).innerHTML = "O".fontcolor("White");
        check();
        if(over == false){
        document.getElementById("rule").innerHTML = xt;
        xsturn = true;
        }
    }
    

}
else if(over){
    document.getElementById("rule").innerHTML = "Game over, press restart to restart (Mindblowing)";
}

}
function restart(){
       count++;
        document.getElementById("btnc1r1").innerHTML = "1";
        document.getElementById("btnc2r1").innerHTML = "1";
        document.getElementById("btnc3r1").innerHTML = "1";
        document.getElementById("btnc1r2").innerHTML = "1";
        document.getElementById("btnc2r2").innerHTML = "1";
        document.getElementById("btnc3r2").innerHTML = "1";
        document.getElementById("btnc1r3").innerHTML = "1";
        document.getElementById("btnc2r3").innerHTML = "1";
        document.getElementById("btnc3r3").innerHTML = "1";
        over = false;
        if(count%2 == 0){
            xsturn = true;
            document.getElementById("rule").innerHTML = xt;
        }
        else{
            xsturn = false;
            document.getElementById("rule").innerHTML = ot;
        }
        console.log(document.getElementById("btnc1r1").innerHTML);
        document.getElementById("res").style.visibility = "hidden"; 
    }





    

