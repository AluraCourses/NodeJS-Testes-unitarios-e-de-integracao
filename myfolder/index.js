/* eslint-disable no-unused-vars */
import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export { somaHorasExtras, calculaDescontos };
