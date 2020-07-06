var FRIEND_NAME = ['Ben', 'Ryan', 'Stan', 'Kent', 'Amanda'];
var LOCATION_NAME = ['swimming pool', 'garden', 'bar room', 'master bedroom', 'exercise room', 'garage', 'kitchen', 'dining room', 'bathroom', 'attic'];
var WEAPON_NAME = ['steak knife', 'pool noodle', 'hammer', 'ak-47', 'baseball bat', 'wine bottle', 'garden hoe', 'shovel', 'wrench', 'jump rope', 'plastic bag', 'kettle bell', 'glock', 'shotgun', 'chainsaw', 'coffee cup', 'lamp', 'strychnine', 'sword', 'Holy Bible'];

document.addEventListener('DOMContentLoaded', function() {

    function insertH3(i) {
        var div = document.createElement('div');
        div.className = "box";

        var h2 = document.createElement('h2');
        var h2Text = document.createTextNode(i);
        h2.appendChild(h2Text);

        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(`Accusation`);
        h3.appendChild(h3Text);

        var mainElement = document.getElementById('main');


        div.appendChild(h3);
        div.appendChild(h2);
        mainElement.appendChild(div);

        // Pull data for accusation
        var frnd = FRIEND_NAME[i % 5];
        var lctn = LOCATION_NAME[i % 10];
        var wpon = WEAPON_NAME[i % 20];

        function accusations(i, friend, location, weapon) {
            alert(`Accusation ${i}: I accuse ${friend}, with the ${weapon} in the ${location}!`);
        } 

        h3.addEventListener('click', function() {
            return accusations(i,frnd,lctn,wpon);
        });

    }

    // Add 100 H3s to DOM
    for (i = 1;i <= 100;i += 1) {
        insertH3(i);
    }

// End of DOMContentLoaded event listener
})

