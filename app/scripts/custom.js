// Firebase custome
function createCounter(ref, name, color){
    var countId = ref.push();
    countId.set({
        id: countId.name(),
        name: name,
        value: 0,
        color: color
    });
}
function createOtherCounter(ref, name){
    ref.once('value', function(dataSnapshot) {
        var lastColor ='';
        dataSnapshot.forEach(function(childSnapshot) {
          lastColor = childSnapshot.val().color;
        });
        createCounter(ref, name, getSingleColor(lastColor));
    });
}
//Couleurs
function getScheme(nbr){
    var color = Please.make_color({
        saturation: .7,
        value: .9
    });
    var scheme = [];

    scheme.push(color);

    var nbInterations = Math.ceil(nbr/6);
    for(var i = 1; i<=nbInterations; i++){
        var item = getSingleScheme(scheme.slice(-1)[0]);
        for(var j=0; j<item.length; j++){
            scheme.push(item[j]);
        }
    }
    var colorToSlice = 6 - (nbr%6);
    scheme.splice(-colorToSlice, colorToSlice);
    return scheme;
}
function getSingleScheme(hsbColor){
    var color = Please.HEX_to_HSV(hsbColor);
    var scheme = [];

    scheme = Please.make_scheme({
        h: color.h,
        s: color.s,
        v: color.v
    },{
        scheme_type: 'analogous',
        format: 'hex'
    });
    scheme.splice(0, 1);
    return scheme;
}
function getSingleColor(color){
    var lastColor = Please.HEX_to_HSV(color);
    var scheme = Please.make_scheme({
        h: lastColor.h,
        s: lastColor.s,
        v: lastColor.v
    },{
        scheme_type: 'analogous',
        format: 'hex'
    });
    return scheme[1];
}
function crypPass(password){
    var encrypted = String(CryptoJS.Rabbit.encrypt(password, passPhrase));
    return encrypted;
}
function decrypPass(password){
    var decrypted = CryptoJS.Rabbit.decrypt(password, passPhrase);
    return decrypted.toString(CryptoJS.enc.Utf8);   
}