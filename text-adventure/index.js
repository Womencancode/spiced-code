const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play? ",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? ",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1? ",
                    answers: {
                        "2": "congratulations! "
                    }
                },
                right: "This was not the right choice. Goodbye! "
            }
        },
        no: "Alright then. Enjoy your day! "
    }
};

function askQuestion(storyObj) {
    rl.question(chalk.green(storyObj.q), answer => {
        console.log(chalk.blue(answer));
        console.log(typeof storyObj.answers[answer]);
        if (typeof storyObj.answers[answer] == "object") {
            console.log("++++++++++++++");
            console.log(storyObj.answers[answer]);
            console.log("++++++++++++++");
            askQuestion(storyObj.answers[answer]);
        } else if (typeof storyObj.answers[answer] == "string") {
            console.log(storyObj.answers[answer]);
            rl.close();
        } else {
            console.log(`that was not the correct answer.`);
            askQuestion(storyObj);
        }
    });
}

askQuestion(story);
