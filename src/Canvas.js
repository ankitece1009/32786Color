import React from 'react'

class Canvas extends React.Component {
    
    constructor(props){
        super(props);
    
        this.state = {
           colors:this.createColor()
        }
        this.myRef = React.createRef();

    }
    componentDidMount() {
        this.fillCanvas();
    }
    
    createColor(){
        let arr = [];
        let red = 0, green= 0  ;
        let blue = 0;
       for(var i =1;i<40000;i++){
           let obj = {}
           obj.red = red;
           obj.green = green;
           obj.blue = blue;
          arr.push(obj);
           blue += 8;
           if(blue > 256){
               blue = 0;
               green += 8;
           }
           if(green > 256){
               green = 0;
               red += 8;
           }
           if(red > 256){
               break;
           }
       }
       return arr;
    }
    fillCanvas(){
        const canvas = this.myRef.current;
        let x =0 , y = 0;
        let {colors:arr} = this.state;
        const ctx = canvas.getContext('2d');
        for(let i = 0;i<arr.length;i++){	
           
        ctx.fillStyle = `rgb(${arr[i].red},${arr[i].green},${arr[i].blue})`;
        x += 8;
        if(x>= canvas.width){
            x =0; y += 8;
        }
        ctx.fillRect(x,y,7,7);
        
        }
    }

    render() {
       
        return (
            <>
            <h1>35937 RGB Colors</h1>
            <canvas style={{border:"1px solid black"}} ref={this.myRef}  width={1000} height={2310}/>
            </>
        );
    }
}

export default Canvas;