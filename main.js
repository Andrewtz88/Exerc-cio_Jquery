$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const taskText = $('#task-input').val().trim();
        
        if (taskText) {
            const taskItem = $('<li></li>').text(taskText);
            $('#task-list').append(taskItem);
            $('#task-input').val(''); // Limpa o campo de input
        }
    });

    // Adiciona o efeito de riscar a tarefa ao clicar
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
