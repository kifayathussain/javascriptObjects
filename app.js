//objects

//parrent object
let john = {
  name: "john <br>",
  //john has two Sons Chris and Alex
  chris: {
    name: "Chris <br>", //chris has two sons Ali and Karim
    ali: {
      name: "Ali <br>",
    },
    karim: {
      name: "Karim <br>",
    },
  },
  Alex: {
    //Alex has five sons john,Alex,Garret,wood,Hales
    john: {
      //john has two sons Ali and Jack
      name: "john <br>",
      Ali: {
        //Ali has four sons suleiman,usman,salman,javed
        name: "Ali <br>",
        suleiman: {
          //suleiman has two sons Kareem and Raheem
          name: "suleiman <br>",
          kareem: {
            name: "Kareem <br>",
          },
          Raheem: {
            //Raheem has two sons Nadeem and Kaleem
            name: "Raheem <br>",
            Nadeem: {
              name: "Nadeem <br>",
            },
            kaleem: {
              //kaleem has two sons amir and liaqat
              name: "kaleem <br>",
              Amir: {
                name: "Amir <br>",
              },
              liaqat: {
                name: "Liaqat <br>",
              },
            },
          },
        },
        usman: {
          name: "Usman <br>",
        },
        Salman: {
          name: "Salman <br>",
        },
        javed: {
          name: "Javed <br>",
        },
      },
      jack: {
        name: "Jack <br>",
      },
    },
    Alex: {
      name: "Alex <br>",
    },
    Garret: {
      name: "Garret <br>",
    },
    wood: {
      //wood has 6 sons Chris,Roy,max,nova,root,mark
      name: "Wood <br>",
      Chris: {
        name: "Chris <br>",
      },
      Roy: {
        name: "Roy <br>",
      },
      Max: {
        //max has 5 sons usman,salman,javed,mark,Alex
        name: "MAX <br>",
        usman: {
          name: "USMAN <br>",
        },
        salman: {
          name: "SALMAN <br>",
        },
        javed: {
          name: "JAVED <br>",
        },
        mark: {
          name: "MARK <br>",
        },
        Alex: {
          name: "ALEX <br>",
        },
      },
      nova: {
        name: "NOVA <br>",
      },
      Root: {
        name: "ROOT <br>",
      },
      Mark: {
        //mark has two sons morgan and watson
        name: "MARK <br>",
        morgan: {
          name: "MORGAN <br>",
        },
        watson: {
          name: "WATSON <br>",
        },
      },
    },
    hales: {
      name: "HALES <br>",
    },
  },
  jack: {
    //jack has two sons kelvin and derekwood
    name: "JACK <br>",

    kelvin: {
      name: "KELVIN <br>",
    },
    derekwood: {
      name: "DEREKWOOD <br>",
    },
  },
  David: {
    //David has one son Kegan
    name: "DAVID <br>",
    kegan: {
      //kegan has one son ALEX
      name: "KEGAN <br>",
      Alex: {
        //ALEX has two sons Jackma and Bill
        name: "ALEX <br>",
        jackma: {
          //jackma has 5 sons kevin,derek,trump.obama.bush
          name: "JACKMA <br>",
          kevin: {
            name: "KEVIN <br>",
          },
          Derek: {
            name: "DEREK <br>",
          },
          Trump: {
            name: "TRUMP <br>",
          },
          obama: {
            name: "OBAMA <br>",
          },
          Bush: {
            name: "BUSH <br>",
          },
        },
        Bill: {
          //BILL has two sons Robert and john
          name: "Bill <br>",
          Robert: {
            name: "ROBERT <br>",
          },
          john: {
            name: "JOHN <br>",
          },
        },
      },
    },
  },
};

function printValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] != "object") {
      document.write(obj[key]);
    } else {
      printValues(obj[key]);
    }
  }
}

printValues(
  "<h2>These are Suleiman sons</h2>" + john.Alex.john.Ali.suleiman.kareem.name
);
document.writeln(john.Alex.john.Ali.suleiman.Raheem.name);

printValues("<h2>These are all family members</h2>");
printValues(john);

delete john.David.kegan.Alex.jackma.Bush;
delete john.David.kegan.Alex.jackma.kevin;
printValues("<h2>Updated family john after removing Jackma two sons</h2>");
printValues(john);

document.writeln(
  "<br>Before Change name : " + " " + john.David.kegan.Alex.jackma.Trump.name
);
john.David.kegan.Alex.jackma.Trump = "Donald Trump";
document.write(
  "After Change name : " + " " + john.David.kegan.Alex.jackma.Trump
);

document.write("</br>");
document.writeln("<br>Before Change name : " + " " + john.jack.derekwood.name);
john.jack.derekwood = "DerekKhan";
document.write("After Change name : " + " " + john.jack.derekwood);
