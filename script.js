// const a = document.querySelectorAll("button");
// console.log(a[0]);
// a[0].innerHTML= "hello"

const buton = document.querySelectorAll("button");
const cost = document.querySelector("input");
const output = document.querySelector(".output");
console.log(buton);
buton[0].addEventListener("click", function(){
//   console.log(cost.value*0.20); 
   let tip = (cost.value*0.15).toFixed(2);
   let temp  = `<h1 style= "color:white; text-align:center;">You should Tip INR ${tip} on INR ${cost.value}</h1>`
   output.innerHTML = temp;
});

buton[1].addEventListener("click", function(){
    //   console.log(cost.value*0.20); 
       let tip = (cost.value*0.20).toFixed(2);
       let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
       output.innerHTML = temp;
     });

 buton[2].addEventListener("click", function(){
        //   console.log(cost.value*0.20); 
           let tip = (cost.value*0.30).toFixed(2);
           let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
           output.innerHTML = temp;
        });
buton[3].addEventListener("click", function(){
            //   console.log(cost.value*0.40); 
               let tip = (cost.value*0.40).toFixed(2);
               let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
               output.innerHTML = temp;
            }); 
 buton[4].addEventListener("click", function(){
 //   console.log(cost.value*0.20); 
    let tip = (cost.value*0.45).toFixed(2);
    let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
    output.innerHTML = temp;
    });  

 buton[5].addEventListener("click", function(){
        //   console.log(cost.value*0.20); 
           let tip = (cost.value*0.50).toFixed(2);
           let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
           output.innerHTML = temp;
           });      

 buton[6].addEventListener("click", function(){
            //   console.log(cost.value*0.20); 
               let tip = (cost.value*0.60).toFixed(2);
               let temp  = `<h1 style= "color:white; text-align:center;"> Our Tip should be INR ${tip} on INR ${cost.value}</h1>`
               output.innerHTML = temp;
               });        
            
        