var name = ['James', 'Anna', 'Ethan', 'Mia'];

names.forEach(function (name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});
