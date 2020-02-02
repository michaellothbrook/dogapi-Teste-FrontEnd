

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
          })
          .always(function() {
            console.log("complete");
          });


          //API IMG RAÇAS
          $('#racas').on('change', function() {
            $('img').remove();
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
                  $('img').attr('src', raca.message[Math.floor(Math.random(0,50))]).css('width','100%');
              }
            })
            .fail(function() {
              console.log("error");
            })
            .always(function() {
              console.log("complete");
            });
          })
        });
