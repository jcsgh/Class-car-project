class LatLon {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
}

class WayPoint extends LatLon {
    constructor(name, lat, lon) {
        super(lat, lon)
        this.name = name;
    }

    print() {
        console.log(`Name: ${this.name}, Latitude: ${this.lat}, Longitude: ${this.lon}`)
    }
}

class Geocache extends WayPoint  {
    constructor(name, difficulty, size, lat, lon) {
        super(name, lat, lon)
        this.difficulty = difficulty;
        this.size = size;
    }

    print() {
        console.log(`Name: ${this.name}, Difficulty: ${this.difficulty}, Size: ${this.size}, Latitude: ${this.lat}, Longitude: ${this.lon}`)
    }
}

cata = new WayPoint("Catacombs", 41.70505, -121.51521)
cata.print()

newberry = new Geocache("Newberry Views", 1.5, 2, 44.052137, -121.41556)
newberry.print()




