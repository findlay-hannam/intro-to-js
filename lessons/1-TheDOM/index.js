function createNewParagraph(text) {
  const newLineElement = document.createElement('p');
  const newLineTextNode = document.createTextNode(text);
  newLineElement.appendChild(newLineTextNode);
  return newLineElement;
}

const textToInsert = ["Leverage","agile","frameworks","to","provide","a","robust","synopsis","for","high","level","overviews.","Iterative","approaches","to","corporate","strategy","foster","collaborative","thinking","to","further","the","overall","value","proposition.","Organically","grow","the","holistic","world","view","of","disruptive","innovation","via","workplace","diversity","and","empowerment."];
