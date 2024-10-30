import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AgendamentoService } from '../service/AgendamentoService';
import { IAgendamentoRequest } from '../interface/IAgendamento';
import { errosMock } from '../../utils/mocks/erros.mocks';
import { isErroAPI } from '../../utils/type-guards/isErroAPI';

export class AgendamentoController {
  private agendamentoService: AgendamentoService;

  constructor() {
    this.agendamentoService = new AgendamentoService();
  }

  public async criarAgendamento(
    event: APIGatewayProxyEvent,
  ): Promise<APIGatewayProxyResult> {
    try {
      if (!event.body) {
        return {
          statusCode: 400,
          body: JSON.stringify(errosMock.DADOS_INVALIDOS),
        };
      }

      const dados: IAgendamentoRequest = JSON.parse(event.body);
      const resultado = this.agendamentoService.criarAgendamento(dados);

      return {
        statusCode: 201,
        body: JSON.stringify(resultado),
      };
    } catch (error: unknown) {
      if (isErroAPI(error)) {
        return {
          statusCode: error.statusCode,
          body: JSON.stringify(error),
        };
      }

      return {
        statusCode: 500,
        body: JSON.stringify({
          mensagem: 'Erro interno do servidor',
        }),
      };
    }
  }
}
export const criarAgendamento = (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const controller = new AgendamentoController();
  return controller.criarAgendamento(event);
};
