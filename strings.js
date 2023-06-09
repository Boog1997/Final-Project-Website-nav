function strings()
{
  var initStr = document.getElementById("initStr").value;
  //var sndStr = document.getElementById("sndStr").value;
 
  alert(initStr);
    //alert(sndStr);

  //concatenate a string == to bring together var1 + var2 ( initstr + sndstr) with new "var".
    //var str3 = initStr + sndStr;
  //document.getElementById("updateString").innerHTML = "concatenation:" + str3;
  //document.getElementById("updateString").innerHTML = "substring 0 - 3 of str3 = " + str3.substring(0,3);
    //The "substring" will start at 0, w/length of 3 characters of str3.
    //var len = str3.length;
  //document.getElementById("updateString").innerHTML = "length of str3 = " + len;
    //the above "doc" statement is for getting the length of the characters from a certain point.
    //var replCJ = str3.toLowerCase();
    //replCJ = replCJ.replace(/terry/g,"tshirt");
    //alert(replCJ);
  //document.getElementById("updateString").innerHTML = " replaced terry with tshirt:" + replCJ;
    //The above "var" && "doc" statement allows you to replace one w/another.
    //By adding the "//g"  will replace them at all occurrances, in this case:"terry".

    var rev = initStr;
    var splitstring = initStr.split("");
    //alert(splitstring);
    var reverseArray = splitstring.reverse("");
    //alert(rev);
    var joinArray = reverseArray.join("");
    //alert(joinArray);

    if( joinArray == initStr)
    {
        confirm("This is a palindrome!")

    }
    else if(joinArray !== initStr)
    {
      confirm("this is not a palindrome!")
    }

    


}