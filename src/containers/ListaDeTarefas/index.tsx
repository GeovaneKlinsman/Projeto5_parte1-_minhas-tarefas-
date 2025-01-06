import Tarefa from '../../components/tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar TypeScript',
    descricao: 'ver a aula 3 da Ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar a conta de internte',
    descricao: 'baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'ir para academia',
    descricao: 'fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
