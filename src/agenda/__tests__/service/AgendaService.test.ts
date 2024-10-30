import { describe, expect, it } from '@jest/globals';
import { AgendaService } from '../../service/AgendaService';
import { medicosMock } from '../../mocks/medicos.mocks';

describe('AgendaService', () => {
  const service = new AgendaService();

  describe('buscarMedicos', () => {
    it('deve retornar lista de médicos', () => {
      const medicos = service.buscarMedicos();
      expect(medicos).toEqual(medicosMock);
    });
  });

  describe('buscarMedicoPorId', () => {
    it('deve retornar médico quando ID existir', () => {
      const medico = service.buscarMedicoPorId(1);
      expect(medico).toEqual(medicosMock[0]);
    });

    it('deve retornar undefined quando ID não existir', () => {
      const medico = service.buscarMedicoPorId(999);
      expect(medico).toBeUndefined();
    });
  });

  describe('verificarHorarioDisponivel', () => {
    it('deve retornar true quando horário estiver disponível', () => {
      const disponivel = service.verificarHorarioDisponivel(
        1,
        '2024-10-05 09:00',
      );
      expect(disponivel).toBeTruthy();
    });

    it('deve retornar false quando horário não estiver disponível', () => {
      const disponivel = service.verificarHorarioDisponivel(
        1,
        '2024-10-05 08:00',
      );
      expect(disponivel).toBeFalsy();
    });
  });
});
