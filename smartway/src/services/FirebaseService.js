import {firebaseDatabase} from '../utils/firebase.js';

export const addItem =  (item) => {
    firebaseDatabase.ref('/linhasOnibus').push({
        name: item
    });
}    

export const getItems = (path) => {
    let itemsRef = firebaseDatabase.ref(path); // path in format '/text_path'
    let docs;    
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            docs = Object.values(data);
            
         });
         return docs;    
}