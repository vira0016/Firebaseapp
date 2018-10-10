var db = firebase.firestore();
var moviesRef = db.collection("movies");

moviesRef.get().then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        console.log(`${doc.id}`);
    })
});

//moviesRef.doc("Action").set({
//    fName: "Avengers",
//    sName: "Star Wars",
//    tName: "Hero"
//});
//
//moviesRef.doc("Comedy").set({
//    fName: "Mr.Bin",
//    sName: "Charli chaplin",
//    tName: "Mask"
//});
//
//moviesRef.doc("Romantic").set({
//    fName: "Titanic",
//    sName: "Murder",
//    tName: "The Hero"
//});
