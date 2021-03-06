let quizData = [
  {
    id: 1,
    title: 'What Department of the Armed Forces was Grace Hopper enlisted in?',
    choices: ['Army', 'Navy', 'Air Force'],
    correct: 'Navy',
    correctDescription:
      'Right Answer: Navy.  Grace Hopper enlisted when she was 36 years old (too old) and was 4 feet 11 inches tall (too short)',
  },
  {
    id: 2,
    title: 'What was Hedy Lamarr, the inventor of Bluetooth, famous for?',
    choices: ['Her Computer Science Achievements', 'Aquatics', 'Acting'],
    correct: 'Acting',
    correctDescription:
      'Correct Answer: Acting.  Hedy Lamarr never received recognition for inventing Bluetooth technology and the Navy took her idea without giving her recognition.',
  },
  {
    id: 3,
    title: 'What famous mathmetician did Lord Byron sire?',
    choices: ['Allison Wenworth', 'Ada Lovelace', 'Elizabeth Bennett'],
    correct: 'Ada Lovelace',
    correctDescription:
      "Correct Answer: Ada Lovelace.  Lord Byron was famously disappointed by having a daughter instead of a son, but Ada Lovelace's legacy now rivals her father's.",
  },
  {
    id: 4,
    title: 'Who coined the term "bug"?',
    choices: ['Annie Easley', 'Grace Hopper', 'Mary Wilkes'],
    correct: 'Grace Hopper',
    correctDescription:
      'Correct Answer:  Grace Hopper.  There was a literal bug (moth) found in a supercomputer that caused her program to glitch.',
  },
];

// this is how you export files into index.js w/out using module in package.json
module.exports = quizData;
