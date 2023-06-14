const str = {

    _subject : ['You', 'I'],
    _verb : ['are', 'feel', 'look', 'am'],
    _adjective : ['adorable', 'adventurous', 'alive', 'attractive', 'beautiful', 'brave','calm', 
'charming', 'clean', 'clear', 'clever', 'cloudy', 'colorful', 'combative', 'cooperative', 'courageous'],

    getMessage(){

        let subj = this._subject[Math.floor(Math.random()*2)];

        let ver = '';

        if(subj === 'You'){
            ver = this._verb[Math.floor(Math.random()*2)];
        }else{
            ver = this._verb[(Math.floor(Math.random()*2) + 1) % 3];
        }
        
        let adj = this._adjective[Math.floor(Math.random()*16)];
        
        return `${subj} ${ver} ${adj}`;
    }
};

function message(){
    document.getElementById("message").innerHTML = str.getMessage();
}