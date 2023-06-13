const message = {
    subject : ['You', 'I'],
    verb : ['are', 'feel', 'look', 'am'],
    adjective : ['adorable', 'adventurous', 'alive', 'attractive', 'beautiful', 'brave','calm', 
'charming', 'clean', 'clear', 'clever', 'cloudy', 'colorful', 'combative', 'cooperative', 'courageous'],

    getMessage(){

        let subj = this.subject[Math.floor(Math.random())];

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

console.log(message.getMessage())