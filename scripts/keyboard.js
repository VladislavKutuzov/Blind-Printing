let btn = document.querySelectorAll('.btn');

document.onkeypress = function (event) {
    console.log(event);
    console.log(event.charCode);

    let keyCode = document.getElementById(event.charCode);
    // console.log(keyCode);





    // let logKey = () => {
    //     keyCode.classList.remove('grey');
    //     keyCode.classList.add('green');
    // }
    // btn.addEventListener('keydown', logKey);
    document.addEventListener('keydown', function() {
        keyCode.classList.add('green');
    });
    document.addEventListener('keyup', function() {
        keyCode.classList.remove('green');
    });

}




