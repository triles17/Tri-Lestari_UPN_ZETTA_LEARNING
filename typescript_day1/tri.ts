let mixed1 = [1, 'data', '3', 'result']
let mixed2 = ['Bejo', 'has', '4', 'sport', 'car']

function combinator(text: (string | number)[]): string {
    let result: string = "";
    text.map((text) => {
      result = result + " " + text;
    });
    return result;
  }

console.log(combinator(mixed1));
console.log(combinator(mixed2));