function Ventes(secteur, chiffreAffaireHt){
    //.... code à compléter
   this.....=....;
   this.....=.....;
   this.chiffreAffaireTtc = function(tauxTvaPct){
       return (1 + tauxTvaPct/100) * this........;
   }
}

var ventesPapeterie = new Ventes("papeterie",35892.45);
console.log(JSON.stringify(ventesPapeterie));
//{"secteur":"papeterie","chiffreAffaireHt":35892.45}
console.log("chiffreAffaireTtc pour papeterie:" 
            +ventesPapeterie.chiffreAffaireTtc(20.0));


var tabVentes = [ ventesPapeterie ];
tabVentes.push(new Ventes("vins" , 15688.6));
tabVentes.push(new Ventes("legumes" , 27897.3));
tabVentes.push(new Ventes("fruits" , 13789.1));
tabVentes.push(new Ventes("viandes" , 21789.96));

function chiffreAffaireHtTotal(tabVentes){
  //.... code à compléter
}

var ca_total = chiffreAffaireHtTotal(tabVentes);
console.log("chiffreAffaireHtTotal="+ca_total); //exemple: 115057.41

//supprimer l'élément "vins" du tableau tabVentes
//d'indice 0+1 puis réafficher le tableau tabVentes
//(avec éléments restants) au format JSON


//.... code à compléter

console.log("tabVentes (après suppression des vins):" 
         + JSON.stringify(tabVentes));
/*
Résultats attendus :

{"secteur":"papeterie","chiffreAffaireHt":35892.45}
chiffreAffaireTtc pour papeterie:43070.939999999995
chiffreAffaireHtTotal=115057.41
tabVentes (après suppression des vins):[{"secteur":"papeterie","chiffreAffaireHt":35892.45},{"secteur":"legumes","chiffreAffaireHt":27897.3},{"secteur":"fruits","chiffreAffaireHt":13789.1},{"secteur":"viandes","chiffreAffaireHt":21789.96}]

*/