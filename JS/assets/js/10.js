var hugo="Hugo LIEGEARD";
var karim= "Karim IHADADENE";
var rudy="Rudy Hricourt";

var premierTrimestre = [{"nom"   : "LIEAGEARD",
                         "prenom": "Hugo"  ,
                         "note"  :   {
                                        francais:4,
                                        math:8,
                                        physique:18
                                     }
                         },
                         {"nom"   : "LIEAGEARD",
                          "prenom": "Hugo"  ,
                          "note"  :   {
                                        francais:12,
                                        math:9,
                                        physique:18,
                                        anglais:19
                                      }
                         },
                         {"nom"   : "LIEAGEARD",
                          "prenom": "Hugo"  ,
                          "note"  :   {
                                        francais:10,
                                        math:15,
                                        physique:6
                                      }
                         }];

console.log(Object.keys(premierTrimestre.note).length);





function calculMoyenne(tab)
{
    var moyenne=0;

    for(var matiere in tab)
    {
        moyenne += tab[matiere];
    }

moyenne /= Object.keys(tab).length;

console.log(moyenne);

}


calculMoyenne(premierTrimestre.note);

