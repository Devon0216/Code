var natural = require('natural');
var tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

console.log(natural.PorterStemmer.tokenizeAndStem("I can see that we are going to be friends"))

console.log(natural.HammingDistance("karolin", "kathrin", false));
console.log(natural.HammingDistance("karolin", "kerstin", false));
console.log(natural.HammingDistance("short string", "longer string", false));





var classifier = new natural.BayesClassifier();
classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the q\'s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');
classifier.train();

console.log(classifier.classify('i am short silver'));
console.log(classifier.classify('i am long copper'));





var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections('soemthing', 1)); 
console.log(spellcheck.getCorrections('soemthing', 2));