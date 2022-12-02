const WORDS = "hola, me llamo maxi hola vivo en moll hola moll maxi maxi maxi";

const countWord = (words) => {
  console.log(words);
  let splitWords = [];
  if (words) {
    const cleanWords = words.trim().toLocaleLowerCase().replace(/[,.!]/g, "");
    splitWords = cleanWords.split(" ");
    console.log(splitWords);
  }

  //hacemos contador
  const COUNT_WORDS = {};
  splitWords.map((el) => {
    if (COUNT_WORDS[el]) COUNT_WORDS[el] += 1;
    else COUNT_WORDS[el] = 1;
  });

  console.log(COUNT_WORDS);
};

countWord(WORDS);
