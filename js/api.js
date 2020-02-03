

        $(document).ready(function() {

          //API DOG RAÇAS
          var link ="https://dog.ceo/api/breeds/list/all";
          var option = '<option>';
          $.ajax({
          url: link,
          type: 'GET',
          dataType: 'json',
          })
          .done(function(data) {
            console.log("success");
            console.log(data);
            if (data != null) {
              $.each(data.message, function (i, d) {
                  $('<option>').val(i).text(i).appendTo($('#racas'));
              });
            }
          })
          .fail(function() {
            console.log("error");
          });


          //API IMG RAÇAS
          $('#racas').on('change', function() {
            $('img').remove();
            $('h2').remove();
            var racaEscolhida = $('#racas').val();
            $.ajax({
            url: 'https://dog.ceo/api/breed/'+racaEscolhida+'/images',
            type: 'GET',
            dataType: 'json',
            })
            .done(function(raca) {
              console.log("success");
              console.log(raca);
              if (raca != null) {
                  console.log(raca);
                  $('#img').append('<img>');
                  $('img').attr('src', raca.message[Math.floor(Math.random(0,50))])
                  .css('width','100%')
                  .css('height','300px');
                  $('#cao').append('<h2>');
                  $('h2').html($('#racas').val())
                  $('#cor').on('change',function(){
                    $('h2').css({'color':$('#cor').val()})
                  })
              }
            })
            .fail(function() {
              console.log("error");
            });
          });

          //FONT API 
          $('#fonte').on('change',function(){
            var font = $(this).val().replace(/\+/g,' ');
            font = font.split(':');
            console.log(font);
            $('head').append("<link href='https://fonts.googleapis.com/css?family=" + font + "' rel='stylesheet' type='text/css'>");
            $('body').css('font-family',font[0]);
          })

        });
