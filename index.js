/* State for the square 
 minner = true or false
 x,y,w
 reveal = true or false
*/

var canvas = document.querySelector('canvas');
var pen;
var grid;
var cols = 10;
var rows = 10;
var w = 40;

class cell {
    constructor( x,y,w , evento ){
        if ( Math.random(1) < 0.5) {
            this.mine = true;
        } else
        {
            this.mine = false;
        }
        
        this.reavealed = true;
        this.x = x;
        this.y = y;
        this.w = w;
    }

    show() {
       pen = canvas.getContext('2d');
       canvas.addEventListener('click', this.test, false);
       pen.rect(this.x,this.y,this.w, this.w);
       pen.lineWidth= 0.5;
      if ( this.reavealed) {
          if ( this.mine) {
            //ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
            pen.rect(this.x + this.w * 0.5  ,this.y + this.w * 0.5,  2 , 2);
          }
          else {
            pen.rect(this.x,this.y,this.w, this.w);  
          }
      }
      pen.stroke();
    }
    
    containe(x,y) {
        
        
            if ( x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w )
            {
             return true;
            }
        
        
            
        }
    
    reavealed() {
       this.reavealed = false; 
    }
}



function make2dArray( cols, rows) {
    var arr = new Array(cols);
     for( let i = 0; i < arr.length; i++){
         arr[i] = new Array(rows);
     }
     return arr;
    }

function setup() {
    //create canvas
   
    grid = make2dArray( cols, rows);
    for ( let i = 0; i < cols; i++) {
        for ( let j = 0; j < rows; j++) {
        grid[i][j] = new cell( i * w, j * w, w)
        }
    }
    
}
function mousePresed() {
    canvas.addEventListener('click', (e) =>{
    let x = e.pageX;
    let y = e.pageY;
        for ( let i = 0; i < cols; i++) {
            for ( let j = 0; j < rows;j++) {
                if( grid[i][j].containe(x,y) ) {
                    console.log(grid[i][j].x)
                    

                }
            }
        
           } 
    

    } )
    
}

function draw(){
    setup();
    
    for ( let i = 0; i < cols; i++) {
        for ( let j = 0; j < rows;j++) {
         grid[i][j].show()
        }
    
       }

}
mousePresed();
draw();
