function requestUserRepos()
{
    const gitHubForm = document.getElementById('gitHubForm');
    let usernameInput = document.getElementById('usernameInput');
    let gitHubUsername = usernameInput.value;          
    const xhr = new XMLHttpRequest();
    try{
    const url = `https://api.github.com/users/${gitHubUsername}/repos`;
    xhr.open('GET', url, true);
    xhr.onload = function () 
    {
        const data = JSON.parse(this.response);
        $('#userRepos').empty();
        for (let i in data) 
        {
            let ul = document.getElementById('userRepos');
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            if(data.message === "Not Found")
            {
                $('#userRepos').empty();
                li.innerHTML = (`<p><strong><font color="red"><center>No User Repositories available in this Name, Please Try with different User Name !!!</center></font></strong></p>`);
            }
            else
            {
                li.innerHTML = (`
                    <p><strong>Repo Name:</strong> ${data[i].name}</p>
                    <p><strong>Description:</strong> ${data[i].description}</p>
                    <p><strong>Major Language:</strong> ${data[i].language}</p>
                    <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                    <p><strong>Size of Repository:</strong> ${data[i].size}</p>
                    <p><strong>Forks done:</strong> ${data[i].forks_count}</p>
                `);
            }
            ul.appendChild(li);
        }
    }
    }
    catch(err)
    {
        console.log("error");
    }
    xhr.send();
}

function requestUserInfo()
{
    const gitHubForm = document.getElementById('gitHubForm');
    let usernameInput = document.getElementById('usernameInput');
    let gitHubUsername = usernameInput.value;          
    const xhr = new XMLHttpRequest();
    try{
    const url = `https://api.github.com/users/${gitHubUsername}`;
    xhr.open('GET', url, true);
    xhr.onload = function () 
    {
        const data = JSON.parse(this.response);
        let ul = document.getElementById('userRepos');
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        if(data.message === "Not Found")
        {
            $('#userRepos').empty();
            li.innerHTML = (`<p><strong><font color="red"><center>No User available in this Name, Please Try with different User Name !!!</center></font></strong></p>`);
        }
        else
        {
        $('#userRepos').empty();
        li.innerHTML = (`
            <p><a href="${data.html_url}"><img class="img-thumbnail" width="200" height="200" src="${data.avatar_url}"/></a></p>
            <p><strong>User Name:</strong> ${data.name}</p>
            <p><strong>About:</strong> ${data.bio}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Website:</strong> ${data.blog}</p>
            <p><strong>Working Company:</strong> ${data.company}</p>
            <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
            <p><strong>Public Gists:</strong> ${data.public_gists}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <p><strong>Twitter ID:</strong> ${data.twitter_username}</p>
            <p><strong>Profile URL:</strong> <a href="${data.html_url}">${data.html_url}</a></p>
            `);
        }
        ul.appendChild(li);
    }
    }
    catch(err)
    {
        console.log("error");
    }
    xhr.send();
}
