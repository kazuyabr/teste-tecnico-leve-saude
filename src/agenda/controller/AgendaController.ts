import { APIGatewayProxyResult } from 'aws-lambda';
import { AgendaService } from '../service/AgendaService';

export class AgendaController {
  private agendaService: AgendaService;

  constructor() {
    this.agendaService = new AgendaService();
  }

  public async buscarAgendas(): Promise<APIGatewayProxyResult> {
    try {
      const medicos = this.agendaService.buscarMedicos();
      return {
        statusCode: 200,
        body: JSON.stringify(medicos),
      };
    } catch {
      return {
        statusCode: 500,
        body: JSON.stringify({
          mensagem: 'Erro interno do servidor',
        }),
      };
    }
  }
}

export const buscarAgendas = async (): Promise<APIGatewayProxyResult> => {
  const controller = new AgendaController();
  return controller.buscarAgendas();
};
