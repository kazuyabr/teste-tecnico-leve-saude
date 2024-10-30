import { IAgendamento } from '../interface/IAgendamento';

export const agendamentosMock: IAgendamento[] = [];

export const criarAgendamentoMock = (
  medicoId: number,
  pacienteNome: string,
  dataHorario: string,
): IAgendamento => {
  const novoAgendamento: IAgendamento = {
    id: agendamentosMock.length + 1,
    medico_id: medicoId,
    paciente_nome: pacienteNome,
    data_horario: dataHorario,
    status: 'CONFIRMADO',
  };

  agendamentosMock.push(novoAgendamento);
  return novoAgendamento;
};
