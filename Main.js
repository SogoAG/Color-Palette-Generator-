let bg = document.querySelector('.wrapper1');
let hexCode = document.querySelector('.hexCode');
let button = document.querySelector('.button');

button.addEventListener('click', colorChg1)
function colorChg1() {
    //Constant length of hex-color string
    const length = 6;

    let posChar = [
        //Possible characters in any hex-color string
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; //store array

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
        //assign random index of posChar to color array
        color[i] = posChar[rand];
        // console.log(color);
    }

    //convert color array to string
    let colorStr = color.join('');
    console.log(colorStr);

    bg.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode.innerText = '#' + colorStr;

    let p = hexCode.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            // Output into an Empty string to append to later
            let output = '';

            // The value been given is an object and not an array so we have to loop through an array

            // First method is to get the entries of the object
            let entries = Object.entries(data);
            //   console.log(entries);

            // then after using the object.entries, the object turns into an array so we then pick the value which is called name in this instance and written as 4 
            let array1 = entries[4];
            //  console.log(array1);

            // So after picking picking array1 which shows the values inside object name we then iterate out values by using 1
            let array2 = array1[1]
            // console.log(array2);

            // after picking out values the then product turns into an object and then the whole looping starts  to pick the objec: value again sighhhh i know right :( 
            let object1 = Object.entries(array2);
            // console.log(object1);


            // we then pick 1 which is value
            let array3 = object1[0]
            // console.log(array3);

            // and then we pick the final result which is what we intend to get initial PS: IF you dont understand Just uncomment the Console.logs To undestand Better 
            let array4 = array3[1]
            // console.log(array4);

            // insert the value to the output variable 
            output +=
                ` ${array4}`
            // append The result to the a color info id in the body section
            document.querySelector('.colorInfo1').innerHTML = output;
        })
}

let bg2 = document.querySelector('.wrapper2');
let hexCode2 = document.querySelector('.hexCode2');


button.addEventListener('click', colorChg2)
function colorChg2() {
    
    const length = 6;

    let posChar = [
       
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; 

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
       
        color[i] = posChar[rand];
        // console.log(color);
    }

   
    let colorStr = color.join('');
    console.log(colorStr);

    bg2.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode2.innerText = '#' + colorStr;

    let p = hexCode2.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            let output = '';


            let entries = Object.entries(data);
            //   console.log(entries);

            let array1 = entries[4];
            //  console.log(array1);

            
            let array2 = array1[1]
            // console.log(array2);

      
            let object1 = Object.entries(array2);
            // console.log(object1);


  
            let array3 = object1[0]
            // console.log(array3);

         
            let array4 = array3[1]
            // console.log(array4);

            
            output +=
                ` ${array4}`
         
            document.querySelector('.colorInfo2').innerHTML = output;
        })
}

let bg3 = document.querySelector('.wrapper3');
let hexCode3 = document.querySelector('.hexCode3');


button.addEventListener('click', colorChg3)
function colorChg3() {
    
    const length = 6;

    let posChar = [
       
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; 

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
       
        color[i] = posChar[rand];
        // console.log(color);
    }

   
    let colorStr = color.join('');
    console.log(colorStr);

    bg3.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode3.innerText = '#' + colorStr;

    let p = hexCode3.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            let output = '';


            let entries = Object.entries(data);
            //   console.log(entries);

            let array1 = entries[4];
            //  console.log(array1);

            
            let array2 = array1[1]
            // console.log(array2);

      
            let object1 = Object.entries(array2);
            // console.log(object1);


  
            let array3 = object1[0]
            // console.log(array3);

         
            let array4 = array3[1]
            // console.log(array4);

            
            output +=
                ` ${array4}`
         
            document.querySelector('.colorInfo3').innerHTML = output;
        })
}

let bg4 = document.querySelector('.wrapper4');
let hexCode4 = document.querySelector('.hexCode4');


button.addEventListener('click', colorChg4)
function colorChg4() {
    
    const length = 6;

    let posChar = [
       
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; 

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
       
        color[i] = posChar[rand];
        // console.log(color);
    }

   
    let colorStr = color.join('');
    console.log(colorStr);

    bg4.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode4.innerText = '#' + colorStr;

    let p = hexCode4.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            let output = '';


            let entries = Object.entries(data);
            //   console.log(entries);

            let array1 = entries[4];
            //  console.log(array1);

            
            let array2 = array1[1]
            // console.log(array2);

      
            let object1 = Object.entries(array2);
            // console.log(object1);


  
            let array3 = object1[0]
            // console.log(array3);

         
            let array4 = array3[1]
            // console.log(array4);

            
            output +=
                ` ${array4}`
         
            document.querySelector('.colorInfo4').innerHTML = output;
        })
}
let bg5 = document.querySelector('.wrapper5');
let hexCode5 = document.querySelector('.hexCode5');


button.addEventListener('click', colorChg5)
function colorChg5() {
    
    const length = 6;

    let posChar = [
       
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; 

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
       
        color[i] = posChar[rand];
        // console.log(color);
    }

   
    let colorStr = color.join('');
    console.log(colorStr);

    bg5.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode5.innerText = '#' + colorStr;

    let p = hexCode5.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            let output = '';


            let entries = Object.entries(data);
            //   console.log(entries);

            let array1 = entries[4];
            //  console.log(array1);

            
            let array2 = array1[1]
            // console.log(array2);

      
            let object1 = Object.entries(array2);
            // console.log(object1);


  
            let array3 = object1[0]
            // console.log(array3);

         
            let array4 = array3[1]
            // console.log(array4);

            
            output +=
                ` ${array4}`
         
            document.querySelector('.colorInfo5').innerHTML = output;
        })
}

let bg6 = document.querySelector('.wrapper6');
let hexCode6 = document.querySelector('.hexCode6');


button.addEventListener('click', colorChg6)
function colorChg6() {
    
    const length = 6;

    let posChar = [
       
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ];

    let color = []; 

    for (let i = 0; i < length; i++) {
        let rand = (Math.random() * 15).toFixed();
       
        color[i] = posChar[rand];
        // console.log(color);
    }

   
    let colorStr = color.join('');
    console.log(colorStr);

    bg6.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    hexCode6.innerText = '#' + colorStr;

    let p = hexCode6.innerText
    // hexCode.innerText = humCol;



    let hex = p.replace('#', '');
    fetch(`https://www.thecolorapi.com/id?hex=${hex}`)
        .then((res) => res.json())
        .then((data) => {

            //   console.log(data);

            let output = '';


            let entries = Object.entries(data);
            //   console.log(entries);

            let array1 = entries[4];
            //  console.log(array1);

            
            let array2 = array1[1]
            // console.log(array2);

      
            let object1 = Object.entries(array2);
            // console.log(object1);


  
            let array3 = object1[0]
            // console.log(array3);

         
            let array4 = array3[1]
            // console.log(array4);

            
            output +=
                ` ${array4}`
         
            document.querySelector('.colorInfo6').innerHTML = output;
        })
}




document.querySelector('body').addEventListener(onload, colorChg1());
document.querySelector('body').addEventListener(onload, colorChg2());
document.querySelector('body').addEventListener(onload, colorChg3());
document.querySelector('body').addEventListener(onload, colorChg4());
document.querySelector('body').addEventListener(onload, colorChg5());
document.querySelector('body').addEventListener(onload, colorChg6());

let copy = document.querySelector('#copy');

copy.addEventListener('click', () => {

   
   let hexCode = document.querySelector('.hexCode').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
})

let copy2 = document.querySelector('#copy2');

copy2.addEventListener('click', () => {

   
   let hexCode2 = document.querySelector('.hexCode2').innerHTML;


   navigator.clipboard.writeText(hexCode2)
      .then(() => {
         let tooltip = document.getElementById('myTooltip2');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy2.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
})
let copy3 = document.querySelector('#copy3');

copy3.addEventListener('click', () => {

   
   let hexCode = document.querySelector('.hexCode3').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip3');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy3.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip3");
    tooltip.innerHTML = "Copy to clipboard";
})

let copy4 = document.querySelector('#copy4');

copy4.addEventListener('click', () => {

   
   let hexCode = document.querySelector('.hexCode4').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip4');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy4.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip4");
    tooltip.innerHTML = "Copy to clipboard";
})

let copy5 = document.querySelector('#copy5');

copy5.addEventListener('click', () => {

   
   let hexCode = document.querySelector('.hexCode5').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip5');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy5.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip5");
    tooltip.innerHTML = "Copy to clipboard";
})

let copy6 = document.querySelector('#copy6');

copy6.addEventListener('click', () => {

   
   let hexCode = document.querySelector('.hexCode6').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip6');
         tooltip.innerHTML = 'Hex Code Copied'

         
      })
      
})
copy6.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip6");
    tooltip.innerHTML = "Copy to clipboard";
})


