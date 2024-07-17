'number' + 3 + 3
// 'number3' is (string concatenation) strat from the left side лівоасоціативна операція
// 'number3' + 3 (string concatenation)
// result: 'number33'
null + 3
// null always = 0, converted to 0 (0 + 3)
// result: 3
5 && "qwerty" 
// 5 is true 
// "qwwerty" is also true (string)
// if the first operand is true, it return the second operand "qwerty"
// result: "qwerty"
    + '40' + +'2' + "hilllel"
// unary + operator convert string into actual number + '40' = 40
// the same with +'2' = 2
//40 + 2 = 42 
// "hillel" string 
// result: "42hillel"
'10' - 5 === 6
//'10' converts to 10, 10 - 5 = 5
// 5 is not equel to 6
// result: false
true + false 
// true always = 1, false always = 0
//result: 1
'4px' - 3
// we can't combaine numbers and letters into string it = NaN
// result: NaN
'4' - 3
//'4' is converted to 4, 4 - 3 
// result: 1
'6' + 3 ** 0
// 3 to the power of 0 = 1 
// '6' + 1 is the string concatination 
// result: 61
12 / '6'
//'6' is converted to 6, and perform the usual division 12/6
// result: 2
'10' + (5 === 6)
// 5 is not equel to 6 it is false 
//'10' + false result in the sting 
// result: '10false'
null == ''
// null is always =0 or =false or =undefined 
// result: false 
3 ** (9 / 3)
// perform the usual division 9/3 = 3
// 3 ** 3 (3 to the power of 3) = 27
// result: 27
!!'false' == !!'true'
// false and true are non empty strings = true 
// both converted to true, true == ture 
// result: ture 
0 || '0' && 1
// && is higher than (||) we to do this first
// '0' is not empty string = true
// 1 is non zero number, is also true. Result of '0' && 1 is the second operand =1
//0 is false 
// (||) operand returns the first true it enconters. 0 is false , 1 is true 
// result: 1 
    (+null == false) < 1 
// +null converted to 0
// 0 == false is true 
// true < 1 is ture 
// result: true
false && true || true
// false && ture is false 
// false || true is false, at least one false leads to false
// result: true 
false && (false || true)
// execute the expression in the bracketd first (false || true) is true 
// false && true = false 
// result: false 
    (+null == false) < 1 ** 5
// +null is converted to 0
// 0 == false is true
// true always = 1
//1 ** 5 = 1
// 1 < 1 false 
// result: false 