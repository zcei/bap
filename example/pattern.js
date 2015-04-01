module.exports = function pattern (dilla) {

  dilla.set('ch01:kick+snare', [
    ['1.1.01', { 'key': 'A01' }],
    ['1.1.51', { 'key': 'A01', 'gain': 0.8 }],
    ['1.1.91', { 'key': 'A02' }],
    ['1.2.88', { 'key': 'A01' }],
    ['1.3.75', { 'key': 'A01' }],
    ['1.3.91', { 'key': 'A02' }],
    ['1.4.72', { 'key': 'A01', 'gain': 0.8 }],
    ['2.1.91', { 'key': 'A02' }],
    ['2.1.51', { 'key': 'A01', 'gain': 0.7 }],
    ['2.3.51', { 'key': 'A01', 'gain': 0.8 }],
    ['2.3.88', { 'key': 'A01' }],
    ['2.4.03', { 'key': 'A02' }]
  ]);

  dilla.set('ch02:hihat', [
    ['*.1.01', { 'key': 'A03', 'gain': 0.7 }],
    ['*.2.01', { 'key': 'A03', 'gain': 0.8 }],
    ['*.3.01', { 'key': 'A03', 'gain': 0.7 }],
    ['*.4.01', { 'key': 'A03', 'gain': 0.8 }],
    ['*.4.53', { 'key': 'A03', 'gain': 0.6 }]
  ]);

  dilla.set('ch03:lead', [
    ['1.1.01', { 'key': 'B01' }],
    ['1.4.90', { 'key': 'B02', 'gain': 0.4 }],
    ['2.1.52', { 'key': 'B02', 'gain': 0.7 }]
  ]);

  dilla.set('ch04:follow', [
    ['1.2.05', { 'key': 'C03', 'gain': 0.6 }],
    ['1.2.51', { 'key': 'C03', 'gain': 0.4 }],
    ['1.3.05', { 'key': 'C03', 'gain': 0.2 }],
    ['1.3.51', { 'key': 'C03', 'gain': 0.05 }],
    ['1.3.75', { 'key': 'C01', 'gain': 0.6 }],
    ['1.4.52', { 'key': 'C01', 'gain': 0.2 }],
    ['2.2.05', { 'key': 'C03', 'gain': 0.6 }],
    ['2.2.50', { 'key': 'C02', 'gain': 0.6 }],
    ['2.3.25', { 'key': 'C01', 'duration': 70, 'gain': 0.6 }],
    ['2.4.01', { 'key': 'C01', 'duration': 85, 'gain': 0.3 }],
    ['2.4.75', { 'key': 'C01', 'duration': 85, 'gain': 0.1 }]
  ]);
};
