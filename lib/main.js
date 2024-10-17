$(document).ready(function(){
    console.log('main deu certo');

    $('#tel').mask('(00) 00000-0000',{
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#zip').mask('00000-000',{
        placeholder: 'xxxxx-xxx'
    })

    $('form').validate({
        rules:{
            name:{
                required: true
            },
            mail:{
                required: true
            },
            tel:{
                required: true
            },
            zip:{
                required: true
            }
        },
        messages: {
            name: 'Please, fulfill all the fields.',
            mail: 'Please, fulfill all the fields.',
            tel: 'Please, fulfill all the fields.',
            zip: 'Please, fulfill all the fields.'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`You have ${camposIncorretos} fields to fulfill`);
            }
        }
    })
})