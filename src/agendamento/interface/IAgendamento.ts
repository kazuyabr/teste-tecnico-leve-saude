export interface IAgendamentoRequest {
  medico_id: number;
  paciente_nome: string;
  data_horario: string;
}

export interface IAgendamentoResponse {
  mensagem: string;
  agendamento: {
    medico: string;
    paciente: string;
    data_horario: string;
  };
}

export interface IAgendamento {
  id: number;
  medico_id: number;
  paciente_nome: string;
  data_horario: string;
  status: string;
}
