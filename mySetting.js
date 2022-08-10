var id = localStorage.getItem("id")
fetch (`http://localhost:8081/api/users/${id}`,{
    // method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer" +" "+ localStorage.getItem("token")
    }
}).then(function(response){
    console.log(response)
    return response.json()
}).then(function(data){
    console.log(data.data.firstName)

    document.getElementById("update-firstName").innerHTML = 
    `
        <input type="text" id="typeText1" class="form-control" />
        <label class="form-label" for="typeText1">${data.data.firstName}</label>
    `
    document.getElementById("update-lastName").innerHTML = 
    `
        <input type="text" id="typeText2" class="form-control" />
        <label class="form-label" for="typeText2">${data.data.lastName}</label>
    `
    document.getElementById("update-email").innerHTML = 
    `
        <input type="text" id="typeText3" class="form-control" />
        <label class="form-label" for="typeText3">${data.data.email}</label>
    `
    document.getElementById("update-phone").innerHTML = 
    `
        <input type="text" id="typeText4" class="form-control" />
        <label class="form-label" for="typeText4">${data.data.phone}</label>
    `
    document.getElementById("update-password").innerHTML = 
    `
        <input type="text" id="typeText5" class="form-control" />
        <label class="form-label" for="typeText5">password</label>
    `
})

//submit update form
var form = document.getElementById('formUpdate')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var firstName = document.getElementById('typeText1').value
    var lastName = document.getElementById('typeText2').value
    var email = document.getElementById('typeText3').value
    var phone = document.getElementById('typeText4').value
    var pass = document.getElementById('typeText5').value
    console.log(firstName, lastName, email, phone, pass)
    if (firstName == '') {
        console.log('First Name cannot be empty')
    }
    if (lastName == '') {
        console.log('last Name cannot be empty')
    }
    if (email == '') {
        console.log('email cannot be empty')
    }
    if (phone == '') {
        console.log('phone cannot be empty')
    }
    if (pass == '') {
        console.log('pass cannot be empty')
    }
    if (pass.length < 8) {
        console.log('pass too weak')
    }


    fetch(`http://localhost:8081/api/users/update/${id}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer" +" "+ localStorage.getItem("token")
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: pass,
        }),
    })
        .then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (message) {
            console.log(message.status)
            if(message.status != "200"){
                alert("fail to update")
            }else{alert(message.message)}
        }).catch(error => console.error('Error:', error))
})







