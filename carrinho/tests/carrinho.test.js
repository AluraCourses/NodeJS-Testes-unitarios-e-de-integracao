/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it('Deve conter um item', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maçã', 0.5, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade total na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar as compras com sucesso!', () => {
    const carrinho = new Carrinho();
    const banana = new Item('Banana', 2, 5);
    const mel = new Item('Mel', 1, 5);

    carrinho.adiciona(banana);
    carrinho.adiciona(mel);

    carrinho.adicionaFrete(5);

    expect(carrinho.finalizaCompra()).toStrictEqual(
      {
        subtotal: 15,
        frete: 5,
        total: 20,
      },
    );
  });

  it('Deve calcular o total do carrinho', () => {
    const carrinho = new Carrinho();
    const banana = new Item('Banana', 3, 2);
    const maca = new Item('Maçã', 2, 5);

    carrinho.adiciona(banana);
    carrinho.adiciona(maca);

    carrinho.adicionaFrete(7);

    expect(carrinho.calculaTotal()).toBe(23);
  });
});
