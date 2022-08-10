var form = document.getElementById('formLogin')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var email = document.getElementById('form1Example1').value
    var password = document.getElementById('form1Example2').value
    console.log(email, password)
    if (email == '') {
        return console.log('email cannot be empty')
    }
    if (password == '') {
        return console.log('password cannot be empty')
    }

    fetch('http://localhost:8081/api/auth/sign-in', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(function (response) {
            if(response.status == 200){
                document.getElementById("close").click();
            }
            return response.json()
        }).then(function (message) {
            console.log(message)
            alert(message.message)
            var token = message.token;
            var id = message.id;
            console.log(token)
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            location.reload()
        }).catch(error => console.error('Error:', error))
})

