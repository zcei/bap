var bap = require('../../index');

var kit = bap.kit();
var basic = bap.oscillator({
  attack: 0.001,
  release: 0.1,
  duration: 10
});
// simple way
var pling = kit.slot(1).layer(basic.with({ 'frequency': 330 }));
// more verbose: create, build, then assign
var nextSlot = bap.slot();
nextSlot.layer(basic.with({ 'frequency': 440 }));
kit.slot(2, nextSlot);

var pattern = bap.pattern({ 'bars': 2, 'tempo': 90 });
pattern.channel(1).add(
  // ['*.1.01', 'A1', 40, 50, -50, -50],
  ['*.1.01', 'A1'],
  ['*.2%1.01', 'A2']
);

var pattern2 = bap.pattern(/*1 bar, 4 beats per bar*/);
pattern2.channel(1).add(
  ['*.*.01', 'A1', 10]
);

pattern.use('A', kit).start();


// function trigger () {
//   nextSlot.start();
//   setTimeout(trigger, 1000);
// }
// trigger();



// pattern are automatically looped, sequences are not
// setTimeout(function () {
//   // pattern.tempo = 160;
//   pattern.pause();
//
//   setTimeout(function () {
//     pattern.channel(2).add(
//       ['*.*.40', 'A1', 20]
//     );
//     pattern.start();
//   }, 1000)
//
//       // pattern2.use('A', kit).start();
// }, 2000);
//   pattern.use('A', kit).start();
//   // return;
//
//   setTimeout(function () {
//     pattern2.use('A', kit).start();
//
//     setTimeout(function () {
//       pattern2.stop();
//       setTimeout(function () {
//         pattern2.playing = true;
//         setTimeout(function () {
//           // bap.clock.position = '1.1.45';
//           bap.clock.playing = false;
//           setTimeout(function () {
//             pattern.start();
//             // pattern.playing = true;
//           }, 1000);
//         }, 1500);
//       }, 1000);
//     }, 1000);
//   }, 1500);
//
// }, 0);

// window.pattern = pattern;
// window.bap = bap;

var positionEl = document.getElementById('position');
function draw () {
  positionEl.textContent = bap.clock.position;
  window.requestAnimationFrame(draw);
}

draw();
