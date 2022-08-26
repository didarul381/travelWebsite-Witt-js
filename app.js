var bikeObject={
    vehical:"Bike",
    imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    capacity:2,
    farePreKilo:3,
    description:
    " This content is a little bit longe"
    
};
var carObject={
    vehical:"Car",
    imageUrl:
   "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwYmFja2dyb3VuZHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    capacity:4,
    farePreKilo:3,
    description:
    " This content is a little bit longe"
    
};
var busObject={
    vehical:"Bus",
    imageUrl:
   "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    capacity:4,
    farePreKilo:30,
    description:
    "  This content is a little bit longe"
    
};



function displayService(service){


    const mainSection=document.getElementById('main-section');
    const stringify=JSON.stringify(service);
    const div =document.createElement('div');
    div.innerHTML=`
    <div class="card mt-3" style="max-width: 800px mx-auto;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">transMode${service.vehical}</h5>
                  <p class="card-text">${service.description}.</p>
                  <p class="card-text"><small class="text-muted">Fare perKilo:${service.farePreKilo}</small><small class="text-bold m-5">Capacity:${service.capacity}
                  </small></p>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
                  onclick='handleClick(${stringify})'
                  data-bs-target="#exampleModal">
               Launch demo modal
              </button>
                </div>
              </div>
            </div>
          </div>


        

    
    `
    mainSection.appendChild(div);
   
    

    
}


displayService(busObject);
displayService(carObject);
displayService(bikeObject);
//handleclick function
/**
 * write a function handle click
 * 
 * 
 */

function handleClick(obj){
  
  const modalBody=document.getElementById("modal-body");
  const stringify=JSON.stringify(obj);

       

  modalBody.innerHTML=  `
  
  <div class="card mx-auto  " style="width: 18rem;">
  <img class="card-img-top" src=${obj.imageUrl} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Vehicla Model:${obj.vehical}</h5>
    <p class="card-text">${obj.description}</p>

    <p class="card-text"><small class="text-muted">Fare perKilo:${obj.farePreKilo}</small>
    <small class="text-bold m-2">Capacity:${obj.capacity}</small></p>

    <p>Fare:<small id="fare" class="text-muted"></small></p>
    <p>Tax:<small id="tax" class="text-muted"></small></p>
    <p>Total-Cost:<small id="total-cost" class="text-muted"></small></p>

    <div class="d-flex flex-column " role="search">
    <input class="form-control me-2 mb-2" id="ditance-input" type="number" placeholder="koto kilo jaben" aria-label="Search">
    <input class="form-control me-2  mb-2" id="quantity-input" type="number" placeholder="quqntity" aria-label="Search">
    <button class="btn btn-outline-success" onclick='calculateCost(${stringify})' type="submit">Submit</button>
  </div>          
    
  </div>
</div>
  
  `
  

}
const servicesArray=[busObject,carObject, bikeObject];

 function displayAll(arr){
  for(let i=0;i<arr.length;i++){
    const element=arr[i];
    displayService(element);

  }
 }
 displayAll(servicesArray);

function calculateCost(obj){
  const ditance=document.getElementById("ditance-input").value;
  const quantity=document.getElementById("quantity-input").value;
  console.log(ditance);
  console.log(quantity);
  console.log( obj.farePreKilo);
  
  const fareCost=document.getElementById("fare");
  const fareTax=document.getElementById("tax");
  const TotalCost=document.getElementById("total-cost");
  fareCost.innerHTML= ditance * quantity * obj.farePreKilo;
  fareTax.innerHTML= obj.farePreKilo*0.1 ;
  const tax=parseFloat(fareTax.innerHTML);
  TotalCost.innerHTML =ditance * quantity * obj.farePreKilo + tax;

  console.log(fareCost);
  console.log(obj);
}

document.getElementById("search-btn").addEventListener("click",function(){

const value=document.getElementById("input-value").value;


for(let i=0;i<servicesArray.length;i++){
  const element=servicesArray[i];
  if(value.toLowerCase()==element.vehical.toLowerCase()){
    document.getElementById('main-section').innerHTML='';
    displayService(element);
    return;
  }else{
    alert("Not vahicle abible");
  }
  

}


})
//1.39