const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let name;

function logName() {
    rl.question(chalk.green("what is your name? "), answer => {
        name = answer;
        // console.log(name);
        let story = {
            q: `Hi ${name} do you want to go on a space odyssee? `,
            answers: {
                yes: {
                    q: `GREAT!! Do you want to follw me on board of the spaceship?`,
                    answers: {
                        yes: {
                            q:
                                "You stand in front of the Captain. He asks you if you want do be a mechnaic or a pilot ",
                            answers: {
                                mechanic: {
                                    q: `Alright! Your name is now Junior tech officer ${name}. Thats great do you want to start your first day of work? `,
                                    answers: {
                                        yes: {
                                            q:
                                                "there is a strange noise in the engine room. The captain said you should go down there and take a look. Will you do this? ",
                                            answers: {
                                                yes:
                                                    "you find a intergalactic rat behind the flux capacitor. Unfortunaly the rat is very big and hungry. The rat starts to eat your delicate. YOU DIE!!!! ",
                                                no:
                                                    "you will be sentenced to death by an intergalactic military court for refusing to obey orders. YOU DIE!!"
                                            }
                                        },
                                        no:
                                            "you will be sentenced to death by an intergalactic military court for refusing to obey orders. YOU DIE!!"
                                    }
                                },
                                pilot: {
                                    q: `Tschooo Tschoo! Your name is now Junior Pilot ${name}. Thats great do you want to start your first day of work?  `,
                                    answers: {
                                        yes: {
                                            q:
                                                "The captain give you the order to go on Ludicrous Speed. Did you find the right button on your first day? ",
                                            answers: {
                                                yes:
                                                    "Unfortunaly it is your first day and you forget to buckle up and you have to brake sharply because a intergalactic wall appears. YOU DIE!!!! ",
                                                no:
                                                    "you will be sentenced to death by an intergalactic military court for not knowing the basics. YOU DIE!!"
                                            }
                                        },
                                        no:
                                            "you will be sentenced to death by an intergalactic military court for refusing to obey orders. YOU DIE!!"
                                    }
                                }
                            }
                        },
                        no: "no"
                    }
                },
                no:
                    "The spaceship starts imediately and you burn in the fire of the rocket engine. YOU DIE!!!"
            }
        };
        askQuestion(story);
    });
}

function askQuestion(storyObj) {
    rl.question(chalk.green(storyObj.q), answer => {
        // console.log(name);
        // console.log(chalk.blue(answer));
        // console.log(typeof storyObj.answers[answer]);
        if (typeof storyObj.answers[answer] == "object") {
            // console.log("++++++++++++++");
            // console.log(storyObj.answers[answer]);
            // console.log("++++++++++++++");
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

logName();
