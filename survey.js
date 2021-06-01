const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Hello, ${answer}!`);

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Wow! You like to do ${answer}!`);

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Wow! You like to listen ${answer}!`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`You like ${answer}!`);

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`You like to eat ${answer}!`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`You like ${answer}!`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`${answer}! That's amazing!`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
