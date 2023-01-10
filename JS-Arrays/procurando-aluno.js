const alunos = ['Nog', 'Nunes', 'Biell', 'Rapha'];
const medias = [8, 9, 7, 8];

const alunosE_medias = [alunos, medias];

function exibirNomeENota(aluno) {
    if (alunosE_medias[0].includes(aluno)) {
        const indice = alunosE_medias[0].indexOf(aluno);

        const mediaDoAluno = alunosE_medias[1][indice];

        console.log(`${aluno} tem media ${mediaDoAluno}`);      
    }else{
        console.log('Aluno não encontrado!');
    }
}

exibirNomeENota('Nunes')

