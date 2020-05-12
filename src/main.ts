const API_URL = 'http://kevinwagenheimproject1api-env.eba-pfzxxg4c.us-east-1.elasticbeanstalk.com';

window.onload = function () {

    document.getElementById('userbutton').addEventListener('click', testFunc);

}

async function testFunc(){

    console.log('in testFunc');
    document.getElementById('message').innerHTML = 'Button clicked';

    let resp = await fetch(`${API_URL}/users`);
    let data = await resp.json();

    document.getElementById('maindiv').innerText = data;

}

