
// var gui = require('nw.gui');
// var win = gui.Window.get();
// win.showDevTools()

var keydown = require('keydown');
var Finch   = require('finch-robot');

var finch;

function findFinch() {

  try {
    finch = Finch();
  } catch(e) {
    finch = false;
    console.log('Unable to find finch')
  }

  if(!finch) {
    setTimeout(findFinch, 1000);
  }

  if(finch) {
    document.getElementById('main').innerHTML = 'Press W, A, S, D';
  }

};

findFinch();



var keyListener = function(keys) {
  if(keys.W) {
    finch.move(0, 255, 0, 255);
  }
  if(keys.S) {
    finch.move(1, 255, 1, 255);
  }
  if(keys.A) {
    finch.move(0, 100, 0, 255)
  }
  if(keys.D) {
    finch.move(0, 255, 0, 100)
  }
}

keydown('W').on('pressed', keyListener);
keydown('A').on('pressed', keyListener);
keydown('S').on('pressed', keyListener);
keydown('D').on('pressed', keyListener);
