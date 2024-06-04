(function ($) {
    var sliding = function (event, ui) {
        function formatTime(time) {
            var hours = parseInt(time / 60 % 24);
            var minutes = parseInt(time % 60);
            minutes = minutes + "";
            if (minutes.length == 1) {
                minutes = "0" + minutes;
            }
            return hours + ":" + minutes;
        }
        var startTime = formatTime(ui.values[0]),
            endTime = formatTime(ui.values[1]),
            day = $(this).data('day'),
            i = $(this).data('i');
        $("#" + day + "-start-" + i).val(formatTime(ui.values[0]));
        $("#" + day + "-end-" + i).val(formatTime(ui.values[1]));
    };
    var options = {
            animate: true,
            distance: 0,
            max: 1440,
            min: 0,
            orientation: "horizontal",
            range: true,
            step: 15,
            value: 0,
            values: [480, 1140],
            change: sliding,
            slide: sliding
        },
        newSliderHtml = function (day, index) {
            return 'Das <input type="text" name="' + day + '-start-' + index + '" id="' + day + '-start-' + index + '" value="0:00" class="blended" disabled="disabled">' +
                ' até <input type="text" name="' + day + '-end-' + index + '" id="' + day + '-end-' + index + '" value="0:00" class="blended" disabled="disabled">&nbsp; ' +
                '<div id="' + day + '-slider-' + index + '" data-i="' + index + '" data-day="' + day + '" class="slider"></div>';
        }


    $.widget("ui.timeslider", {
        options: $.extend(options, {
            days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
        }),
        _create: function () {
            var self = this,
                o = this.options,
                dayslength = o.days.length;
            o.timeslider = this;

            function getTime(time) {
                var times = time.split(':');
                time = (times[0] * 60) + parseInt(times[1]);
                return time;
            }
            for (var i = 0; i < dayslength; i++) {
                self.element.append(self._sliderhtml(o.days[i]));
                $("#" + o.days[i] + '-slider-0').slider(o);
                $("#" + o.days[i] + "-start-0").bind("change", function () {
                    var slider = "#" + this.id.substr(0, this.id.length - 6);
                    var newval = getTime($("#" + this.id).val());
                    if (!isNaN(newval)) $(slider).slider("values", 0, newval);
                });
                $("#" + o.days[i] + "-end-0").bind("change", function () {
                    var slider = "#" + this.id.substr(0, this.id.length - 6);
                    var newval = getTime($("#" + this.id).val());
                    if (!isNaN(newval)) $(slider).slider("values", 1, newval);
                });
            }
        },
        _sliderhtml: function (day) {
            var displayday = day.charAt(0).toUpperCase() + day.substr(1);
            var html = "" +
                '<div class="fieldrow spacer">' +
                '<label for="' + day + '-time" class="inline">' + displayday + ':</label>' +
                newSliderHtml(day, 0) +
                '<div style="clear:both"></div>' +
                '</div>';
            return html;
        }
    });
})(jQuery);

$(document).ready(function () {
    let idProfSessao = $('#idProfSessao').val();
    $.ajax({
        url: "php/listarturma.php?act=listarturmaprofessor",
        type: "POST",
        data: {
            idProfSessao: idProfSessao
        },
        success: function (data) {
            let dadosTurma = JSON.parse(data);
            $(dadosTurma).each(function (index, item) {
                let alunos = '<div class="child span2 item" id="divTurma' + item.id + '">' +
                    '<h2><i class="avatar-img" style="background:url(../images/group.jpg)"></i><button id="btnTurma' + item.id + '" class="btn btn-primary">' + item.nomeTurma + '</button></h2>' +
                    '</div>';
                $('#alunosTurma').append(alunos);
                let idTurma = item.id;
                $('#btnTurma' + idTurma).on('click', function () {
                    if ($('#alunoRow')) {
                        $('#alunoRow').empty();
                        $('.btn').removeClass('btn btn-danger');
                        $('.btn').data('clicked', false);
                        if ($('#btnTurma' + idTurma).data('clicked', true)) {
                            $(this).addClass('btn btn-danger');
                            $(this).removeClass('child');
                        }
                        $.ajax({
                            url: "php/listarturma.php?act=listar",
                            type: "POST",
                            data: {
                                idTurma: idTurma
                            },
                            success: function (data) {
                                let dadosAlunos = JSON.parse(data);
                                $(dadosAlunos).each(function (index, value) {
                                    let cardAluno = '<a class="child childCard" id="cardChild' + item.id + '">' +
                                        '<i class="avatar-img" style="background:url(img/avatar/' + value.sexo + '/' + value.avatar + '.png)"></i>' +
                                        value.nomeAluno +
                                        '</a>';
                                    $('#alunoRow').append(cardAluno);
                                });
                                $('.childCard').on('click', function () {
                                    if ($(this).attr('style')) {
                                        $(this).removeAttr('style');
                                    } else {
                                        $(this).css('background-color', 'red');
                                    }
                                });
                            }
                        });
                    }

                    // week planner
                    $("#data").timeslider();
                    $.ajax({
                        url: "php/horas.php",
                        type: 'POST',
                        data: {
                            idTurma: idTurma
                        },
                        success: function (data) {
                            let dadosHoras = JSON.parse(data);
                            $(dadosHoras.result).each(function (index, item) {
                                var horariodeuso = $('#'+item.dia+'-slider-0').slider('values', [item.de, item.ate]);
                            });
                        }
                    });

                    $('#atualizar').on('click', function () {
                        var domingo = $('#Domingo-slider-0'),
                            segunda = $('#Segunda-feira-slider-0'),
                            terca = $('#Terça-feira-slider-0'),
                            quarta = $('#Quarta-feira-slider-0'),
                            quinta = $('#Quinta-feira-slider-0'),
                            sexta = $('#Sexta-feira-slider-0'),
                            sabado = $('#Sábado-slider-0'),
                            btn = $(this),
                            showError = $('#showError');

                        btn.attr('disabled', 'disabled');
                        loading(true);
                        $.ajax(
                                'php/atualizarhoras.php', {
                                    type: "POST",
                                    data: {
                                        idTurma: idTurma,
                                        domingo: domingo.slider('values'),
                                        segunda: segunda.slider('values'),
                                        terca: terca.slider('values'),
                                        quarta: quarta.slider('values'),
                                        quinta: quinta.slider('values'),
                                        sexta: sexta.slider('values'),
                                        sabado: sabado.slider('values')
                                    }
                                }).done(function (data) {
                                console.log(data);
                                var d = JSON.parse(data);
                                if (d.error == 0) {
                                    alert('Horários atualizados.');
                                    location.reload();
                                } else {
                                    alert('Ocorreu um erro ao atualizar.');
                                }
                            })
                            .fail(function (error) {
                                //
                                console.log(error);
                            })
                            .always(function () {
                                console.log('ok');
                                btn.removeAttr('disabled');
                                loading(false);
                            });
                    });
                });
            });
        }
    });
});