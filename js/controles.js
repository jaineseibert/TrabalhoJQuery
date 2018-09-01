$(window).load(function () {
    $("#botao_topo").sticky({topSpacing: 0});
});

$(document).ready(function () {
    $('#top-menu').prmenu({
        "fontsize": "14",
        "height": "50",
        "case": "capitalize",
        "linkbgcolor": "#286090",
        "linktextcolor": "#ffffff",
        "linktextweight": "400",
        "linktextfont": "sans-serif",
        "hoverdark": false
    });

    $('.autoplay').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $.getJSON('json/estados-cidades.json', function (data) {
        var itens = '<option value="">- Selecione um estado -</option>';
        var itensCidade = '<option value="">- Selecione uma cidade -</option>';

        $.each(data.estados, function (key, val) {
            itens = itens + '<option value="' + key + '">' + val.nome + '</option>';
        });

        $('#estado').html(itens);
        $('#cidade').html(itensCidade);
        $('#estado').change(function () {
            itensCidade = '<option value="">- Selecione uma cidade -</option>';
            var estado = data.estados[$(this).val()];

            $.each(estado.cidades, function (key, valor) {
                itensCidade = itensCidade + '<option value="' + key + '">' + valor + '</option>';
            });
            $('#cidade').html(itensCidade);
        }).change();


    });
    $('#email').inputmask('email');
    $('#telefone').inputmask('(99) 9 9999-9999');

    $('#subir').click(function () {

    });
    $('#subir').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow'); //slow, medium, fast
    });

    $('#conteudo .date').datepicker({
        'format': 'dd/mm/yyyy',
        'autoclose': true
    });

    $("#formulario").validate({
        messages: {
            email: {
                required: '<br><font color="FF0000">Informe um email!</font>'
            },
            telefone: {
                required: '<br><font color="FF0000">Informe um Telefone!</font>'
            }
        }
    });
});