const tombol2 = document.querySelector('.btnBox p');


tombol2.addEventListener('click', function(){
    const tolak = confirm("are you sure?");
    if(tolak === true){
        location.href = "https://www.google.com/";
    }
});



