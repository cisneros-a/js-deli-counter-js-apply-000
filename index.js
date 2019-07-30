var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
// we have created a function that will take the current line, which is an
// empty array to start off. We want to add the name of the person taking a
// number in line, which is the second parameter of the function. In order
// to add the name, we use the '.push' feature to add the new name to the
// end of the array, or the line of customers in this case. We will
// then return our line with each unique name and their place in line.


function takeANumber2() {
  var customers = 0
  customers++
  console.log(`You are number ${customers}`)
}

takeANumber2()
takeANumber2()

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}
// we have created a function here that will call the first person in
// line, or the array. First we need to determine whether or not there
// is a line to even pull a name from. That is where we start with the
// 'if' statement. If the length of the line, or the array, is greater
// than 0, we will return who is currently being served. We can kill
// two birds with one stone by using the '.shift' feature to remove the
// first person from the array. We also cannot do anymore actions after using
// the 'return' function, so it must be done there. If the length of the
// is equal to 0, we will return a string saying there is no line.

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }else{
    var template = `The line is currently: 1. ${katzDeliLine[0]}`
    for (var i = 1; i < katzDeliLine.length; i++){
      template = template + ', ' + (i+1) + '. ' + katzDeliLine[i]
    }
  }
  return template
}
// here we are creating a function, currentLine, that will show us who
// is in line and what the order is. Again, here we have to determine if
// there is a line. If the length of our line, or array, katzDeliLine, is equal
// to zero, we will simply return that the line is empty. Now, in
// order to create a template of what will display every time we run
// our function, we'll create a variable, 'template', to fit this template.
// We will fit in the first few words and it will always include the first
// person in line. The 'for' loop will iterate over every item in our
// aray, with var 'i' starting with '1' in our array, the second item. It
// will then determine if we have reached the length of our array. If we
// have not reached the length, each iteration will then increase var 'i'
// by 1. We then need to complete our string. We will concactenate our
// template with other strings to create the correct format. In our template,
// we already added the first person in line. So we need to concactenate
// starting with the second person in our line. That is why we use
// '(i + 1)'. If not in (), then it would simply return '01, 11, 21' instead
// of '1, 2, 3'. The use of adding 'katzDeliLine[i]' is to get each name in
// in the array. Finally, we will get this total string to equal 'template'
// and return 'template', the final product.
