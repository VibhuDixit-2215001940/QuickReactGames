let button = document.querySelectorAll('button');
let input = document.getElementById('inp');
let clear = document.getElementById('clear');

for(let btn of button){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let btnText = e.target.innerText;
        
        if(btnText === 'C') input.value = '';
        else if(btnText === '='){
            try{
                input.value = eval(input.value);
                setTimeout(() => input.value = '', 10000);
            }
            catch(e){
                alert('Invalid input!');
                input.value = '';
            }
        }
        else input.value += btnText;
    });
}

