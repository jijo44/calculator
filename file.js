function add() {
  var jay = 0,
    b = 0;
  jay = f.formName.value;
  b = jay.charAt(jay.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    f.formName.value = jay.substring(0, jay.length - 1);
    f.formName.value += "+";
  } else {
    f.formName.value += "+";
  }
}

function sub() {
  var jay = 0,
    b = 0;
  jay = f.formName.value;
  b = jay.charAt(jay.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    f.formName.value = jay.substring(0, jay.length - 1);
    f.formName.value += "-";
  } else {
    f.formName.value += "-";
  }
}
function mul() {
  var jay = 0,
    b = 0;
  jay = f.formName.value;
  b = jay.charAt(jay.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    f.formName.value = jay.substring(0, jay.length - 1);
    f.formName.value += "*";
  } else {
    f.formName.value += "*";
  }
}

function di() {
  var jay = 0,
    b = 0;
  jay = f.formName.value;
  b = jay.charAt(jay.length - 1);
  if (b == "+" || b == "-" || b == "/" || b == "*") {
    f.formName.value = jay.substring(0, jay.length - 1);
    f.formName.value += "/";
  } else {
    f.formName.value += "/";
  }
}
