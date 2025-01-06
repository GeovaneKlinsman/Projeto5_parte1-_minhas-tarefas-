import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da Tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Descricao></S.Descricao>
    <S.barraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.barraAcoes>
  </S.Card>
)
export default Tarefa
