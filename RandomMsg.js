const message = {
    _subjec : ['You', 'I'],
    _verb : ['are', 'feel', 'look', 'am'],
    _adjective : ['adorable', 'adventurous', 'alive', 'attractive', 'beautiful', 'brave','calm', 
'charming', 'clean', 'clear', 'clever', 'cloudy', 'colorful', 'combative', 'cooperative', 'courageous'],

    getMessage(){

        let subj = this.subject[Math.floor(Math.random()*2)];

        let ver = '';

        if(subj === 'You'){
            ver = this.verb[Math.floor(Math.random()*2)];
        }else{
            ver = this.verb[(Math.floor(Math.random()*2) + 1) % 3];
        }
        
        let adj = this.adjective[Math.floor(Math.random()*16)];
        
        return `${subj} ${ver} ${adj}`
    }
};