function getRandomNumber(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function xmlReplacement(text) {
  text = text.replace("##UniversalSet##", UniversalSet)
  text = text.replace("##A_Only##", A_Only)
  text = text.replace("##B_Only##", B_Only)
  text = text.replace("##C_Only##", C_Only)
  text = text.replace("##A_and_B_not_C##", A_and_B_not_C)
  text = text.replace("##A_and_C_not_B##", A_and_C_not_B)
  text = text.replace("##B_and_C_not_A##", B_and_C_not_A)
  text = text.replace("##A_and_B_and_C##", A_and_B_and_C)
  text = text.replace("##not_A_or_B_or_C##", not_A_or_B_or_C)
  text = text.replace("##A_Whole##", A_Whole)
  text = text.replace("##B_Whole##", B_Whole)
  text = text.replace("##C_Whole##", C_Whole)
  text = text.replace("##A_or_B_or_C##", A_or_B_or_C)
  text = text.replace("##A_and_B##", A_and_B)
  text = text.replace("##A_and_C##", A_and_C)
  text = text.replace("##B_and_C##", B_and_C)
  text = text.replace("##ExactlyOne##", ExactlyOne)
  text = text.replace("##ExactlyTwo##", ExactlyTwo)
  text = text.replace("##AtLeastOne##", AtLeastOne)
  text = text.replace("##AtLeastTwo##", AtLeastTwo)
  text = text.replace("##AtMostOne##", AtMostOne)
  text = text.replace("##AtMostTwo##", AtMostTwo)
  return text
}
function vennGen() {
  /* Generate Venn Diagram Numbers */
  universe = getRandomNumber(50, 200);
  remaining = universe
  sec1 = getRandomNumber(0,remaining*.5)
  remaining -= sec1
  sec2 = getRandomNumber(0,remaining*.5)
  remaining -= sec2
  sec3 = getRandomNumber(0,remaining*.5)
  remaining -= sec3
  sec4 = getRandomNumber(0,remaining*.75)
  remaining -= sec4
  sec5 = getRandomNumber(0,remaining*.75)
  remaining -= sec5
  sec6 = getRandomNumber(0,remaining*.75)
  remaining -= sec6
  sec7 = getRandomNumber(0,remaining*.75)
  remaining -= sec7
  sec8 = remaining

  /* --- Variable List --- */
  UniversalSet = universe
  /* Individual Sections */
  A_Only = sec1
  B_Only = sec2
  C_Only = sec3
  A_and_B_not_C = sec4
  A_and_C_not_B = sec5
  B_and_C_not_A = sec6
  A_and_B_and_C = sec7
  not_A_or_B_or_C = sec8
  /* Whole Circles */
  A_Whole = sec1 + sec4 + sec5 + sec7
  B_Whole = sec2 + sec4 + sec6 + sec7
  C_Whole = sec3 + sec5 + sec6 + sec7
  A_or_B_or_C = universe - sec8
  /* Two Circle Intersections */
  A_and_B = sec4 + sec7
  A_and_C = sec5 + sec7
  B_and_C = sec6 + sec7
  /* Misc */
  ExactlyOne = sec1 + sec2 + sec3
  ExactlyTwo = sec4 + sec5 + sec6
  AtLeastOne = universe - sec8
  AtLeastTwo = universe - sec8 - sec1 - sec2 - sec3
  AtMostOne = sec1 + sec2 + sec3 + sec8
  AtMostTwo = universe - sec7

  /* Load XML for Question */
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "questions.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  num = xmlDoc.getElementsByTagName("QUESTION").length
  num = getRandomNumber(0, num - 1)
  question = xmlDoc.getElementsByTagName("QUESTION")[num]

  /* Pull Labels and Question */
  text = question.getElementsByTagName("QUESTION_TEXT")[0].childNodes[0].nodeValue
  label_A = question.getElementsByTagName("LABEL_SET_A")[0].childNodes[0].nodeValue
  label_B = question.getElementsByTagName("LABEL_SET_B")[0].childNodes[0].nodeValue
  label_C = question.getElementsByTagName("LABEL_SET_C")[0].childNodes[0].nodeValue

  /* Clean and Format Question Text */
  text = text.trim()
  text = xmlReplacement(text)

  /* Register Captivate Variables */
  window.cpAPIInterface.setVariableValue('QuestionText', text)
  window.cpAPIInterface.setVariableValue('LabelA', label_A)
  window.cpAPIInterface.setVariableValue('LabelB', label_B)
  window.cpAPIInterface.setVariableValue('LabelC', label_C)
  window.cpAPIInterface.setVariableValue('ans_UniversalSet', universe)
  window.cpAPIInterface.setVariableValue('ans_Section1', sec1)
  window.cpAPIInterface.setVariableValue('ans_Section2', sec2)
  window.cpAPIInterface.setVariableValue('ans_Section3', sec3)
  window.cpAPIInterface.setVariableValue('ans_Section4', sec4)
  window.cpAPIInterface.setVariableValue('ans_Section5', sec5)
  window.cpAPIInterface.setVariableValue('ans_Section6', sec6)
  window.cpAPIInterface.setVariableValue('ans_Section7', sec7)
  window.cpAPIInterface.setVariableValue('ans_Section8', sec8)
}

function checkAnswer() {
  correct = false;

  if(window.cpAPIInterface.getVariableValue("entry_Section1") == sec1 &&
     window.cpAPIInterface.getVariableValue("entry_Section2") == sec2 &&
     window.cpAPIInterface.getVariableValue("entry_Section3") == sec3 &&
     window.cpAPIInterface.getVariableValue("entry_Section4") == sec4 &&
     window.cpAPIInterface.getVariableValue("entry_Section5") == sec5 &&
     window.cpAPIInterface.getVariableValue("entry_Section6") == sec6 &&
     window.cpAPIInterface.getVariableValue("entry_Section7") == sec7 &&
     window.cpAPIInterface.getVariableValue("entry_Section8") == sec8 &&
     window.cpAPIInterface.getVariableValue("entry_UniversalSet") == universe
  ) {
     correct = true;
  }

  if(correct == true) {
     alert("Congratulations, You're Correct!")
  //   window.cpAPIInterface.setVariableValue('Result',"Correct");
  } else {
     alert("Incorrect, Try Another Problem")
  //   window.cpAPIInterface.setVariableValue('Result',"Incorrect");
  }
}
