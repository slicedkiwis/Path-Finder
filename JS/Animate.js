 class Animate{
    constructor(cellArray){
    }
    sleep = async (mili) =>{
        return new Promise(resolve => setTimeout(resolve,mili)); 
    }
     animateAlgorithm = async (cellArray,algorithm) =>{
        await this.sleep(10);
         await this.animate(cellArray);
    }
    animateState(node,state){
        
   }
}