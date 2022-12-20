function createString(strings) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
      result += strings[i] + ' ';
    }
    return result.trim();
  }

  console.log(createString(["Hello", "there", "students", "of", "SEDC", "!"]));