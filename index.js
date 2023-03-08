function newImage (pth, lt, bt) {
    let object = document.createElement('img')
    object.src = pth
    object.style.position = 'fixed'
    object.style.left = lt + 'px'
    object.style.bottom = bt + 'px'
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/pillar.png', 350, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/crate.png', 150, 200);

newImage('assets/well.png', 500, 425);

function newItem(pth, lt, bt){
    let object = newImage(pth, lt, bt)
    object.addEventListener('dblclick', () => {
        object.remove()
    })
}


newItem('assets/sword.png', 500, 405);

newItem('assets/shield.png', 165, 185);

newItem('assets/staff.png', 600, 100);


/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)*/

