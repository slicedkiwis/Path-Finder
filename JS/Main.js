const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
{
    let cellArray = [];
    let generateGrid = () =>{
    let defaultSize = 40;
    let offSet = 10;
    let currentX = 0;
    let currentY = 0;
    while(currentY < height){
      let newRow =[];
      let newRowDiv = document.createElement("rowDiv");
      newRowDiv.id = "rowDiv";
      while(currentX < width){
        let newDiv = document.createElement("cell");
        newDiv.id = "cell";
        newDiv.xPos = currentX;
        newDiv.yPos = currentY; 
        newDiv.size = [50,50];
        newDiv.state = "Cell";
        newRow.push(newDiv);
        newRowDiv.appendChild(newDiv);
        currentX +=(defaultSize + offSet); 
      } 
      currentX = 0;
      currentY += (defaultSize + offSet); 
      document.getElementById("Grid").append(newRowDiv);
      cellArray.push(newRow);
    } 
   }
   generateGrid();
   let Animation = new Animate(); 
   Animation.animate(cellArray,0,0);
}