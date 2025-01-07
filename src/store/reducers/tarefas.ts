import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.status.CONCLUIDA,
      'rever aula 2 do Módulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
