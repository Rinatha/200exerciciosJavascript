// Exercício 96: Verifique se o segundo array é um subarray (contíguo) do primeiro.

function ehSubarray(principal, sub) {
  if (sub.length === 0) return true;
  for (let i = 0; i <= principal.length - sub.length; i++) {
    let ok = true;
    for (let j = 0; j < sub.length; j++) {
      if (principal[i + j] !== sub[j]) {
        ok = false;
        break;
      }
    }
    if (ok) return true;
  }
  return false;
}

// Teste rápido
console.log(ehSubarray([1,2,3,4,5], [2,3,4])); // true
console.log(ehSubarray([1,2,3,4,5], [2,4]));   // false
