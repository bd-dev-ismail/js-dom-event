//Option 1
//Drictly Set on html element.
//Add option 2 onlcik function
function makeRed(){
            document.body.style.backgroundColor = 'red';
        }
//Option 3 
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }
//Option 3- Another [Use sometime]
const purpleButton = document.getElementById('make-pruple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple'
        }
//Option -4-- <button id="make-pink">Make Pinik</button>
const makePinkButton = document.getElementById('make-pink');
        makePinkButton.addEventListener('click', makePink);
        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

//Option4.5 <button id="make-green">Make Green</button>
 const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green';
        })
//Option -4 Final Version----<button id="make-goldenrod">Make goldenRod</button>
document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
      });