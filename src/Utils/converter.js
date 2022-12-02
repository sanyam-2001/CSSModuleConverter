const sanitizeClassname = (s) => {
  while (s.indexOf('-') !== -1) {
    s = s.replace('-', '_');
  }
  return s;
}
const handleClassNames = (arr) => {
  if (arr.length === 0) return `''`;
  if (arr.length === 1) return `{styles.${sanitizeClassname(arr[0])}}`
  return '{`' + arr.map(a => `styles.${sanitizeClassname(a)}`).map(a => '${' + a + '}').join(' ') + '`}';
}
const convertCSSToModule = (text) => {

  const phrase = `className='`;
  // Uniform all literals
  while (text.indexOf(`"`) !== -1) {
    text = text.replace(`"`, `'`);
  }

  let ans = "";
  while (text.indexOf(phrase) !== -1) {
    const x = text.indexOf(phrase);
    ans += text.substring(0, x + phrase.length - 1);
    text = text.slice(x + phrase.length);

    const endOfClassname = text.indexOf(`'`);
    const classNames = (text.substring(0, endOfClassname).split(' '));
    ans += handleClassNames(classNames);
    text = text.slice(endOfClassname + 1);
  }
  return ans + text;

}

export default convertCSSToModule;


