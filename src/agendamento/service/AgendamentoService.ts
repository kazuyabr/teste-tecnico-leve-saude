import { AgendaService } from '../../agenda/service/AgendaService';
import {
  IAgendamentoRequest,
  IAgendamentoResponse,
} from '../interface/IAgendamento';
import { errosMock } from '../../utils/mocks/erros.mocks';
import { criarAgendamentoMock } from '../mocks/agendamentos.mocks';

export class AgendamentoService {
  private agendaService: AgendaService;

  constructor() {
    this.agendaService = new AgendaService();
  }

  public criarAgendamento(dados: IAgendamentoRequest): IAgendamentoResponse {
    const medico = this.agendaService.buscarMedicoPorId(dados.medico_id);

    if (!medico) {
      throw errosMock.MEDICO_NAO_ENCONTRADO;
    }

    if (
      !this.agendaService.verificarHorarioDisponivel(
        dados.medico_id,
        dados.data_horario,
      )
    ) {
      throw errosMock.HORARIO_INDISPONIVEL;
    }

    const agendamento = criarAgendamentoMock(
      dados.medico_id,
      dados.paciente_nome,
      dados.data_horario,
    );

    return {
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: {
        medico: medico.nome,
        paciente: agendamento.paciente_nome,
        data_horario: agendamento.data_horario,
      },
    };
  }
}
