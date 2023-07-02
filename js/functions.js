$(document).ready(function() {
    var fechaActual = new Date();
    $('#fecha-actual').text(fechaActual.getDate() + " " + obtenerNombreMes(fechaActual.getMonth()));
    $('#day').text(fechaActual.getDate() + " " + obtenerNombreMes(fechaActual.getMonth()));

    setInterval(() => {
        $('#task-counter').text(taskCounter() + " tareas");

        if(taskCounter() == 0){
            $('#msj').html('Estas al día <i class="fa-solid fa-hands-clapping"></i>');  
        } else{
            $('#msj').html(taskCounter()  + ' tareas pendientes <i class="fa-solid fa-briefcase"></i>');
        }
        
    }, 1000);
    

    function taskCounter() {
        var cantidadElementos = $('#tasks').find('#task-body').length;
        return cantidadElementos;
    }

    function obtenerNombreMes(mes) {
        var meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return meses[mes];
    }

    $('#new-task-button').click(function () {
        $('#task-creator').fadeIn();
    });
    
    $('#cancel-btn').click(function () {
        $('#task-creator').fadeOut();
    });
    
    $('#save-btn').click(function () {
        $('#tasks').append('<div class="row" id="task-body">' +
                                '<div class="col-1" id="checkbox">' +
                                    '<input type="checkbox" name="" class="checkbox-task-complete" autocomplete="off">' +
                                '</div>' +
                                '<div class="col-11" id="description-time-tasks">' +
                                    '<p id="description">' + $('#description-task').val() +'</p>' +
                                    '<p id="time">' + $('#start').val() + ' - ' + $('#end').val() + '</p>' +
                                '</div>' +
                            '</div>');
                            
        $('#task-creator').fadeOut();
        $('#description-task').val('');
        $('#start').val();
        $('#end').val();
    });
    
    $(document).on('change', '.checkbox-task-complete', function() {
        if ($(this).is(':checked')) {
            $(this).closest('.row').remove();
        }
    });
});