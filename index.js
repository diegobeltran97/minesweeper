/* State for the square 
 minner = true or false
 x,y,w
 reveal = true or false
*/
(function(Window){
    var App = {
        objectCell: function box(element, event, funcion, i, j) {
                this.element = document.createElement(element),
                this.mine = false,
                this.neigbordCount = 0;
                
                this.atributes = this.element.setAttribute('class', 'cell'),
                this.row = this.element.setAttribute('data-row' ,  i ),
                this.col = this.element.setAttribute('data-col', j),
                
                //this.content = this.element.textContent = content
              
                this.event = this.element.addEventListener( event , funcion , true , true );
                
               
              },
        
        
        cols :10,
        rows: 10,
        arr: new Array(10),
        

        htmlElements: {
            container: document.querySelector('.container'),
            btngame: document.querySelector('.again')
        },

        init: function(){
            console.log('iniciando');
            App.initHandlers();
            

        },
        
        initHandlers: function(){
            App.initArrays();
            App.initSetup();
            
            
            
        },

        initArrays: function() {
          for ( var i = 0; i < App.cols ; i++) {
            App.arr[i] = new Array(10)
          }
       
            
        },
        initSetup: function(){
            for ( var i = 0; i < App.cols ; i++) {
                for ( var j = 0; j < App.rows; j++) {
                    App.arr[i][j] = new App.objectCell('div', 'click',  App.handleClickBtn , i, j);
                    App.htmlElements.container.appendChild( App.arr[i][j].element)
                }
              }

            App.htmlElements.btngame.addEventListener('click', App.handleRandom)
           // App.getPositionCol();
           // App.getPositionRow();

              
//data guiion html
        },
       
        handleClickBtn: function(element){
            
            
           
             if ( element.currentTarget.textContent == '*') {
                element.currentTarget.style.color = "black"
            } else {
                element.currentTarget.classList.add('revealed');
                let test = element.target;
                let row = test.getAttribute('data-row');
                let col = test.getAttribute('data-col');
                App.neigbord(row, col)
            } 
         
            
        },

        handleRandom: function(){

           App.clear()

            for ( var i = 0; i < App.cols ; i++) {
                for ( var j = 0; j < App.rows; j++) {
                if ( Math.random(1) < 0.2) {
                    App.arr[i][j].element.textContent = '*';
                    App.arr[i][j].mine = true;
                }
                   
                }
              }

            
                             
        },
        clear: function(){
            for ( var i = 0; i < App.cols ; i++) {
                for ( var j = 0; j < App.rows; j++) {
                    App.arr[i][j].element.textContent = '';
                   
                }
              }
        },

        neigbord: function(row , col) {
            let fila = parseInt(row);
            let colum = parseInt(col);
            var acum = 0;
            for ( let i = -1; i <= 1; i++) {
                for (let j = -1; j <=1;j++) {
                    let x =  fila + i;
                    let y = colum + j;
                 
                    if ( x != -1 && y != -1 && x != 10 &&  y != 10 ) {

                    
                    var n = App.arr[x][y]
                          
                        if ( n.mine == true ) {
                          acum++;
                          App.arr[x][y]
                        }
                       
                        }
                        
                    } 
                }
            
            if ( acum != 0) {
                App.content(fila , colum, acum);
            }
            else {
                App.floodFill(fila, colum)
            }
             
            
           
       
        },
        content: function(fila, colum, acum) {
            App.arr[fila][colum].neigbordCount = acum;
            App.arr[fila][colum].element.textContent = acum;
        },
        floodFill: function(fila, colum){
           
            for ( let i = -1; i <= 1; i++) {
                for (let j = -1; j <=1;j++) {
                    let x =  fila + i;
                    let y = colum + j;
                 
                    if ( x != -1 && y != -1 && x != 10 &&  y != 10 ) {
                        
                        var n = App.arr[x][y];
                        
                        if (  n.mine != true && App.arr[x][y].status != true) {
                            App.addStatus(x,y);
                            App.arr[x][y].element.classList.add('revealed');
                            App.neigbord(x,y);
                        }
                        
                            
     
                        
                        
                    } 
                }
            }
            
           

          
        },


        addStatus:function(x,y) {
         
                App.arr[x][y].status = true;
            
                
              
            
           
        }
        
    };
    Window.App = App;
})(window);
