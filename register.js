var form = document.getElementById('formRegister')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var firstName = document.getElementById('form3Example1').value
    var lastName = document.getElementById('form3Example2').value
    var email = document.getElementById('form3Example3').value
    var phone = document.getElementById('form3Example4').value
    var pass = document.getElementById('form3Example5').value
    var confirmPass = document.getElementById('form3Example6').value
    console.log(firstName, lastName, email, phone, pass, confirmPass)
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
    if (pass !== confirmPass) {
        console.log('confirm pass does not match')
    }

    fetch('http://localhost:8081/api/auth/sign-up', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: pass,
            roles:["USER"]
        }),
    })
        .then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (message) {
            alert(message.message)
        }).catch(error => console.error('Error:', error))
})


