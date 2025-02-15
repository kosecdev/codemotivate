const vscode = require('vscode');

// List of 50 motivational quotes
const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. — Cory House",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
    "Fix the cause, not the symptom. — Steve Maguire",
    "Make it work, make it right, make it fast. — Kent Beck",
    "Stay hungry, stay foolish. — Steve Jobs",
    "Do not stop when you are tired. Stop when you are done. — Unknown",
    "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
    "The best error message is the one that never shows up. — Thomas Fuchs",
    "If you don’t make mistakes, you’re not working on hard enough problems. — Frank Wilczek",
    "The best way to get a project done faster is to start sooner. — Jim Highsmith",
    "It’s not a bug – it’s an undocumented feature. — Unknown",
    "A language that doesn’t affect the way you think about programming is not worth knowing. — Alan Perlis",
    "Optimism is an occupational hazard of programming. — Kent Beck",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
    "Before software can be reusable, it first has to be usable. — Ralph Johnson",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Programming isn’t about what you know; it’s about what you can figure out. — Chris Pine",
    "The most damaging phrase in the language is: 'It’s always been done this way.' — Grace Hopper",
    "Java is to JavaScript what car is to carpet. — Chris Heilmann",
    "Don’t comment bad code—rewrite it. — Brian Kernighan",
    "A good programmer is someone who always looks both ways before crossing a one-way street. — Doug Linder",
    "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. — Antoine de Saint-Exupéry",
    "Programming is the art of algorithm design and the craft of debugging errant code. — Ellen Ullman",
    "Computers are good at following instructions, but not at reading your mind. — Donald Knuth",
    "The only real mistake is the one from which we learn nothing. — Henry Ford",
    "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
    "There is no such thing as a boring project. There are only boring executions. — Irene Etzkorn",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Code never lies, comments sometimes do. — Ron Jeffries",
    "A person who never made a mistake never tried anything new. — Albert Einstein",
    "Quality is never an accident; it is always the result of intelligent effort. — John Ruskin",
    "Code is like a poem; it has to be short and concise but still meaningful. — Unknown",
    "The best way to predict the future is to invent it. — Alan Kay",
    "The function of good software is to make the complex appear to be simple. — Grady Booch",
    "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. — Eagleson’s Law",
    "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. — John Romero",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. — Edsger Dijkstra",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. — Seymour Cray",
    "Give me six hours to chop down a tree and I will spend the first four sharpening the axe. — Abraham Lincoln",
    "Bad programmers worry about the code. Good programmers worry about data structures and their relationships. — Linus Torvalds",
    "The most important single aspect of software development is to be clear about what you are trying to build. — Bjarne Stroustrup",
    "A well-written program is its own heaven; a poorly written program is its own hell. — Geoffrey James",
    "Programming is like writing a book… except when you miss a single comma, the whole thing makes no sense. — Unknown",
    "People who are really serious about software should make their own hardware. — Alan Kay",
    "Technology is best when it brings people together. — Matt Mullenweg",
    "Learning to write programs stretches your mind and helps you think better, creates a way of thinking about things that I think is helpful in all domains. — Bill Gates",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. — Patrick McKenzie"
];

/**
 * Function to get a random motivational quote
 */
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "codemotivate" is now active!');

    // Show a quote on VS Code startup
    vscode.window.showInformationMessage(getRandomQuote());

    // Register a command to manually show a quote
    let disposable = vscode.commands.registerCommand('codemotivate.showQuote', () => {
        vscode.window.showInformationMessage(getRandomQuote());
    });

    context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
