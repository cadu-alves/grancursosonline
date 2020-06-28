// Declare app level module which depends on views, and components
var app = angular.module('electionState', []).controller('CaduController', [
    '$scope',
    function($scope) {
        $scope.teste="Qualquer String";
        $scope.questions=questions;
        
    }
]);

var questions = [
    {
        id: 1,
        question: 'Considerando a insuficiência renal aguda IRA RENAL (Intrínseca ou estrutural) a principal causa é a necrose tubular aguda (NTA isquêmica e/ou tóxica). Sendo uma das situações especiais comuns a NTA SÉPTICA (associada a duas ou mais das seguintes condições de SIRS): Assinale a alternativa que corresponde a alguns sintomas da mesma:',
        answers: [
            {id: 1, answer:'Temperatura > 38o C ou < 36o C frequência cardíaca > 90 bpm frequência respiratória > 20 ipm PaCO2 < 32 mmhg leucócitos > 12.000 ou < 4.000 mm3 mais de 10% de bastões ou metamielócitos foco infeccioso documentado ou hemocultura positiva.'},
            {id: 2, answer:'Exame de urina I com proteinúria e proteinúria acima de 1g/dia hematúria com dismorfismo eritrocitário positivo ou cilindros hemáticos no sedimento urinário biópsia renal positiva.'},
            {id: 3, answer:'Manifestações periféricas de hipersensibilidade febre e rash cutâneo ou eosinofilia uso de droga associada a NIA – Por ex., penicilinas, cefalosporinas, quinolonas, alopurinol, cimetidina, rifampicina forte suspeita clínica patologias frequentemente associadas: leptospirose, legionella, sarcoidose biópsia renal positiva.'},
            {id: 4, answer:'Nenhuma das alternativas.'}
        ], 
        correctAnswer: 1,
        userChoice: 0,
    
    },
    {
        question: 'A respeito da investigação diagnóstica na litíase urinária é CORRETO afirmar:',
        answers: [
            {id: 1, answer:'A tomografia computadorizada é o exame tradicional para avaliação de litíase urinária e fornece informação funcional relacionada ao grau de obstrução. A radiação é maior do que na tomografia computadorizada. É necessária a administração de meio de contraste intravenoso, com risco de reações alérgicas ou nefrotoxicidade.'},
            {id: 2, answer:'Na ultrassonografia os cálculos são demonstrados como focos ecogênicos brilhantes, com sombra acústica posterior. Os cálculos são visualizados razoavelmente bem , quando estão localizados no rim, no ureter distal ou na junção ureterovesical, especialmente se existe dilatação. '},
            {id: 3, answer:'A urografia venosa é o exame radiológico mais sensível para detecção, localização e caracterização de calcificações urinárias, é consideravelmente mais efetiva do que a urografia venosa, frequentemente, demonstra cálculos não obstrutivos que são perdidos na urografia venosa, é mais rápida e, muitas vezes, não é necessário meio de contraste e diferencia facilmente cálculo não-opacos e coágulos ou tumores. '},
            {id: 4, answer:'Nenhuma das alternativas.'}
        ], 
        correctAnswer: 2,
    
    },
    {
        question: 'Sobre o carcinoma epidermoide de pênis (CEP) considere a alternativa CORRETA:',
        answers: [
            {id: 1, answer:'A prevalência desse câncer é maior na sexta década de vida, sendo pouco encontrado em jovens e raramente na infância.'},
            {id: 2, answer:'Certos subtipos de papilomavírus humano (HPV), principalmente dos grupos 08 e 22, têm sido implicados na gênese tumoral, o que sugere que CEP possa ser uma moléstia sexualmente transmissível.'},
            {id: 3, answer:'Paciente apresenta lesão peniana com mau aspecto e odor, resistente a tratamento local, evolutiva e muitas vezes exsudativa, ocasionando dificuldades no convívio social e interferindo na qualidade de vida. Dor como sintoma sistêmico é relatado por 70 a 80% dos pacientes, o que geralmente leva a busca pelo atendimento médico.'},
            {id: 4, answer:'Nenhuma das alternativas.'}
        ], 
        correctAnswer: 1,
    
    },
];