/* State for the square 
 minner = true or false
 x,y,w
 reveal = true or false
*/
(function(Window){
    var App = {
        objectCell: function box(element, event, funcion) {
                this.element = document.createElement(element),
                this.visible = false,
                
                this.atributes = this.element.setAttribute('class', 'cell'),
                
                //this.content = this.element.textContent = content
              
                this.event = this.element.addEventListener( event , funcion );
               
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
                    App.arr[i][j] = new App.objectCell('div', 'click', App.handleClickBtn);
                    App.htmlElements.container.appendChild( App.arr[i][j].element)
                }
              }

            App.htmlElements.btngame.addEventListener('click', App.handleRandom)

              

        },
       
        handleClickBtn: function(element){
            
        
            
            
        },
        handleRandom: function(e){

           App.clear()

            for ( var i = 0; i < App.cols ; i++) {
                for ( var j = 0; j < App.rows; j++) {
                if ( Math.random(1) < 0.2) {
                    App.arr[i][j].element.textContent = '*';
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

        handleDeleteBtn: function(e) {
            let n = e.currentTarget.textContent;
            
            if ( App.boxs[n].element.classList.contains('selected' ) ){
                App.boxs[n].element.classList.remove('selected')
                App.boxs[n].element.classList.remove('blocker')
                App.htmlElements.container2.removeChild(e.currentTarget);
            }
           
               
        },
        initBtnBuy: function(e){
           
          
        },


        initWinner:function(e) {
           
                
              
            
           
        }
        
    };
    Window.App = App;
})(window);
