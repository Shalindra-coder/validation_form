const btn = document.querySelector("#btn")
const form = document.querySelector(".contact-form")






btn.addEventListener('click', function(e){
    const userid = document.querySelector("#UserId").value;
    const contact = document.querySelector("#Contact").value;
    const Email = document.querySelector("#Email").value;

    const password = document.querySelector("#Password").value;
    const confirmpassword = document.querySelector("#ConfirmPassword").value;
    const message= document.querySelector(".message")

    e.preventDefault()
    let count=0;


    if( userid != ""){
        count++;
    }

    if((contact !="")&& Number(contact) && contact.length===10){
        count++

    }else{
        message.style.color="red"
        message.innerText="Your Contact number is not valid 10 digit number"
 
    }
    if(Email != ""){
        count++
    }
    if((password !="")&&(password.length===8)){
        count++
    }
    if(confirmpassword == password){
        count++
    }else{
        message.style.color="red"
        message.innerText="Your password is not matched"
    }

    if(count == 5){
        form.innerHTML="form submitted"
        message.innerHTML="done"
    }

});