// Create a new javascript file
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and songs should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

// creates a new station
class station {
    // name property should be a string and songs should be an array of song objects
    constructor(name, songs) {
        this.name = name;
        this.songs = songs;
    }
}
    
//radio object
let radio = {

    // stations property that has the value of an array of station objects
    stations: [
        new station("yuh", [new song(), new song()]), 
        
        new station("")
    ]

        
    // method to pick random station
    randomStation() {
        station[Math.floor(Math.random() * stations.length)]
        // pick song from that random station and console.log("Now Playing:" + song,title + "by" + song.artist)
    }
}

let station {
    name: "106.1",
    song: song.title
}

// song object
let song = [
    {
        title: "Hello",
        artist: "Adele"
    }
]
    
console.log(stations)