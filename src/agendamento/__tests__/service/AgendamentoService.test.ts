import { describe, expect, it } from '@jest/globals';
import { AgendamentoService } from '../../service/AgendamentoService';

describe('AgendamentoService', () => {
  const service = new AgendamentoService();

  describe('criarAgendamento', () => {
    it('deve criar agendamento com sucesso', () => {
      const dados = {
        medico_id: 1,
        paciente_nome: 'João Silva',
        data_horario: '2024-10-05 09:00',
      };

      const resultado = service.criarAgendamento(dados);

      expect(resultado.mensagem).toBe('Agendamento realizado com sucesso');
      expect(resultado.agendamento).toHaveProperty('medico', 'Dr. João Silva');
      expect(resultado.agendamento).toHaveProperty('paciente', 'João Silva');
      expect(resultado.agendamento).toHaveProperty(
        'data_horario',
        '2024-10-05 09:00',
      );
    });

    it('deve lançar erro quando médico não existir', () => {
      const dados = {
        medico_id: 999,
        paciente_nome: 'João Silva',
        data_horario: '2024-10-05 09:00',
      };

      expect(() => service.criarAgendamento(dados)).toThrow(
        expect.objectContaining({
          statusCode: 404,
          mensagem: 'Médico não encontrado',
          erro: 'NOT_FOUND',
        }),
      );
    });

    it('deve lançar erro quando horário não estiver disponível', () => {
      const dados = {
        medico_id: 1,
        paciente_nome: 'João Silva',
        data_horario: '2024-10-05 08:00',
      };

      expect(() => service.criarAgendamento(dados)).toThrow(
        expect.objectContaining({
          statusCode: 400,
          mensagem: 'Horário não disponível para agendamento',
          erro: 'BAD_REQUEST',
        }),
      );
    });
  });
});
