const fs = require("fs");

let raw = fs.readFileSync("Insta/bin/followers_1.json", "utf8");
let data = JSON.parse(raw);

let raw2 = fs.readFileSync("Insta/bin/following.json", "utf8");
let data2 = JSON.parse(raw2);

let follower = data.map(x => x.string_list_data[0].value);
let following = data2.relationships_following.map(x => x.title);

let dict = {};

following.forEach(element => {
    dict[element] = false;
});

follower.forEach(element => {
    if (dict[element] != undefined) {
        dict[element] = true;
    }
});

let notFollowingBack = [];

for (let key in dict){
    if (dict[key] == false){
        notFollowingBack.push(key);
    }
}

notFollowingBack.forEach(element => {
    fs.writeFileSync("Insta/not_following_back.txt", `${element}\n`, {flag: "a+"})
});
