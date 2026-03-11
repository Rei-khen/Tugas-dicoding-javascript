import sum from "./index.js";
import test from "node:test";
import assert from "node:assert";

//tes untuk kedua angka positif
test("tes untuk kedua angka positif", () => {
  const result = sum(5, 5);
  assert.strictEqual(result, 10);
});

//test untuk salah satu angka bukan number
test("tes jika salah satu bukan number", () => {
  const result = sum("5", 5);
  assert.strictEqual(result, 0);
});

//test jika kedua parameter bukan number
test("tes jika kedua paramater bukan number", () => {
  const result = sum("5", false);
  assert.strictEqual(result, 0);
});

//tes jika satu parameter bilangan negatif
test("tes jika salah satu bilangan negatif", () => {
  const result = sum(-5, 10);
  assert.strictEqual(result, 0);
});

//tes jika kedua paramter bilangan negatif
test("tes jika kedua bilangan negatif", () => {
    const result = sum(-5, -10);
    assert.strictEqual(result, 0);
})
