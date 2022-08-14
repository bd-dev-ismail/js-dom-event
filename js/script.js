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
//Option 3- Another 
const purpleButton = document.getElementById('make-pruple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple'
        }