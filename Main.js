let bg = document.querySelector('#bg');
let header = document.querySelector('#header');
let button = document.querySelector('#button');

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
    header.innerText = '#' + colorStr;

    let p = header.innerText
    // header.innerText = humCol;



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
            document.querySelector('#colorInfo').innerHTML = output;

        })

}


let bg2 = document.querySelector('#bg2');
let header2 = document.querySelector('#header2');

button.addEventListener('click', colorChg)
function colorChg() {
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

    bg2.style.backgroundColor = '#' + colorStr;
    // let humCol = bg.style.backgroundColor; //converts color code to RGB
    header2.innerText = '#' + colorStr;

    let p = header2.innerText
    // header.innerText = humCol;




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
            document.querySelector('#colorInfo2').innerHTML = output;

        })

}



// any time yo reload the page the effects also takes place without changing colors , Damain wrote that old ass code under , he even used the onclick function you cant blame him though he was born during WW2
document.querySelector('body').addEventListener(onload, colorChg());
document.querySelector('body').addEventListener(onload, colorChg1());
// document.addEventListener(onload, colorChg());




// Function For Copying Text

let copy = document.querySelector('#copy');

copy.addEventListener('click', () => {

   
   let hexCode = document.querySelector('#header').innerHTML;


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

   // let textArea = document.createElement('textarea');
   let hexCode = document.querySelector('#header2').innerHTML;


   navigator.clipboard.writeText(hexCode)
      .then(() => {
         let tooltip = document.getElementById('myTooltip2');
         tooltip.innerHTML = 'Hex Code Copied'
      })
})

copy2.addEventListener('mouseout', () =>{
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
})
