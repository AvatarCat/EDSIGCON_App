import firebase from './Firebase';
import '@firebase/firestore';

const db = firebase.firestore();

const component_name = "Services/DB";

const AddPresenter = (presenterInquiry) => {
    
    const {name, school, role} = presenterInquiry.presenter;

    console.log(component_name, `${name} # ${school} # ${role} #`)

    // Add a new document with a generated id.
    db.collection("presenters").add({
        name: name,
        school: school,
        role: role,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        presenterInquiry.callback();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

};

const GetPresenters = (inquiry) => {
    
    //stuff
    let presenterRef = db.collection("presenters");

    presenterRef.where("name", "==", `${inquiry.name}`).get()
            .then( (querySnapshot) => {
                if(!querySnapshot.empty){
                    inquiry.callback(querySnapshot);
                }
            })
            .catch((error) => {
                console.error(component_name, error);
            });

};

export { AddPresenter, GetPresenters };