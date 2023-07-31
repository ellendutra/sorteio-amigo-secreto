import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante nao sorteie o próprio nome', () => {
    const participantes = [
      'Ana Catarina', 
      'Beatriz',
      'Caio', 
      'Daniel', 
      'Ellen', 
      'Fernanda'
    ]

    const sorteio = realizarSorteio(participantes)

    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})