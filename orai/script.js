async function main() {
    await GetPostById(97);
    await PatchPost(97);
}
main()

async function GetAllPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        console.log(data);
    }
    catch (er){
        console.error(er.message);
    }

}

async function GetPostById(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();

        console.log(data);
        }
    catch (er){
        console.error(er.message);
    }
}

async function CreatePost() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                                method: 'POST',
                                body: JSON.stringify({
                                title: 'foo',
                                body: 'bar',
                                userId: 1,
                                }),
                                headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                },
    });
        const data = await response.json();
        console.log(data);
        }
    catch (er){
        console.error(er.message);
    }
}

async function UpdatePost(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                                method: 'PUT',
                                body: JSON.stringify({
                                id: 1,
                                title: 'foo',
                                body: 'bar',
                                userId: 1,
                                }),
                                headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                },
});
        const data = await response.json();

        console.log(data);
        }
    catch (er){
        console.error(er.message);
    }
}

async function PatchPost(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                                method: 'PATCH',
                                body: JSON.stringify({
                                title: 'foo',
                                }),
                                headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                },
});
        const data = await response.json();

        console.log(data);
        }
    catch (er){
        console.error(er.message);
    }
}

async function DeletePost(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                                method: 'DELETE',
});
        }
    catch (er){
        console.error(er.message);
    }
}