function login()
{
    var name = $('input[name=NameInput]').val()
    console.log(name);
    $.ajax({
            url: '/user/' + name,
            cache: false
        })
        .done(function( result ) {
            console.log(result)
            // count += 1;
            // if (count == 4) {
            //     $('.spinner').remove()  
            // }
            $('.login-form').remove()
            $('.starter-template').append('<h1>' + result + '</h1>')

        });
}