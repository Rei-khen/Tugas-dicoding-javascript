import test from 'node:test';
import assert from 'node:assert';

import { sum } from './index.js';

//melakukan tes untuk penjumlahan 2 positif
test("menumlahkan 2 angka posifit", () => {
    const result = sum(10,10);
    assert.strictEqual(result, 20)
});

//melakukan tes untuk penjumlahan 2 angka negatif
test("menjumlahkan 2 angka negatif", () => {
    const result = sum(-10, -5);
    assert.strictEqual(result, -15);
});

//melakukan tes untuk penjumlahan positif dan negatif
test("menjumlahkan bilangan negatif dan positif", () => {
    const result = sum(-5, 15);
    assert.strictEqual(result, 10);
})