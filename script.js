
var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");

container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML+=`<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name}</div>
        <img src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body text-primary">
        <h5 class="card-title">Capital:${data1[i].capital}</h5>
        <h5 class="card-title">Region:${data1[i].region}</h5>
        <h5 class="card-title">Country code:${data1[i].alpha3Code}</h5>
        <a href="#" class="btn btn-primary" >Click for weather</a>
        
  </div>
</div>
      </div>`;
      document.body.append(container);
    }
}


//click for weather

async function restdata(){
  let res=await fetch("https://restcountries.com/v2/all");
  let res1=await res.json();
  console.log(res1);
  
  try{
      for (var i=0; i<res1.length; i++){
          var name=res1[i].name;
          var latlong=res1[i].latlng;
          // latlong=[33,65]
          // 33
          // 65
          if(latlong.length===undefined){
              throw new Error("Invalid Coordinates");
          }
          opendata(name,...latlong);
          }
  } catch (error){
  console.log("Error/invalid"+error.message);
  }
  // console.log(res1[0].name);
  // console.log(res1[0].latlng);
  }
  async function opendata(name,lat,lon){
  try{
      let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9889f9b7a71bac35f3052581bc66fcc3`);
      let res1=await res.json();
      console.log(`Country name:${name} , Temp:${res1.main.temp}`);
  
  } catch (error){
      console.log(error.message);
  
  }
  }
  restdata();