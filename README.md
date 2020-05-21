## Electron Tic Tac Toe

In the project directory, you can run:


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

components:
-Board
    -Cross
    -Zero
    
    Store:
    board:
    players:{
      p1;'X'
      p2:'O'
      turn:p1
    }
    results:{
    win:null
        draw:false
    }