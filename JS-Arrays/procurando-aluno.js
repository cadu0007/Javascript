const alunos = ['Nog', 'Nunes', 'Biell', 'Rapha'];
const medias = [8, 9, 7, 8];

const alunosE_medias = [alunos, medias];

function exibirNomeENota(aluno) {
    if (alunosE_medias[0].includes(aluno)) {
        // const alunos = alunosE_medias[0];
        // const medias = alunosE_medias[1];

        const [alunos, medias] = alunosE_medias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem media ${mediaDoAluno}`);      
    }else{
        console.log('Aluno não encontrado!');
    }
}

exibirNomeENota('Nunes')

