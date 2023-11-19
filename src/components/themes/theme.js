const theme = {};

theme.colors = {
  grass: "#8ED680",
  green: "#12977A",
  teal: "#0B6482",
  navy: "#092370",
  orange: "#ffbb00",
  lightgrey: "#cccccc"
};

theme.wordTypes = {
  noun: theme.colors.grass,
  verb: theme.colors.green,
  adverb: theme.colors.teal,
  adjective: theme.colors.navy,
  preposition: theme.colors.navy,
  pronoun: theme.colors.orange,
  determiner: theme.colors.orange,
  conjunction: theme.colors.orange,
  none: theme.colors.lightgrey
};

export default theme;
