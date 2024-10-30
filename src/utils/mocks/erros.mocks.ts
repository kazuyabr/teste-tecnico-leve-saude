import { IErroAPI } from '../interfaces/IErroAPI';

export const errosMock: Record<string, IErroAPI> = {
  MEDICO_NAO_ENCONTRADO: {
    statusCode: 404,
    mensagem: 'Médico não encontrado',
    erro: 'NOT_FOUND',
  },
  HORARIO_INDISPONIVEL: {
    statusCode: 400,
    mensagem: 'Horário não disponível para agendamento',
    erro: 'BAD_REQUEST',
  },
  DADOS_INVALIDOS: {
    statusCode: 400,
    mensagem: 'Dados da requisição inválidos',
    erro: 'BAD_REQUEST',
  },
};
