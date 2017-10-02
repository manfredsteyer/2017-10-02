
function Flight(id, from, to, date) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.date = date;
}

function FlightManager(flightCache) {

    // this.flightCache = flightCache;

    this.getFlightCount = function() {
        return flightCache.length;
    }

    this.add = function(f) {
        flightCache.push(f);
    }

    this.findById = function(id) {
        for(var i=0; i<flightCache.length; i++) {
            var flight = flightCache[i];
            if (flight.id == id) {
                return flight;
            }
        }
        // return null;
    }

    this.findById2 = function(id) {
        return flightCache.find(function(item) {
            return item.id == id;
        });
    }

    this.findById3 = function(id) {
        return flightCache.find( (item) => {
            return item.id == id;
        });
    }


    this.findById4 = function(id) {
        return flightCache.find(item => item.id == id);
    }

    this.findByRoute = function(from, to) {
        return flightCache.filter(f => f.from == from && f.to == to);
    }
}

var f1 = new Flight(1, 'Graz', 'Flagranti', '2017-10-12T17:00+01:00');
var f2 = new Flight(2, 'Graz', 'Kognito', '2017-10-12T17:30+01:00');

var fm = new FlightManager([]);

fm.add(f1);
fm.add(f2);

console.debug('flug mit 2', fm.findById2(2));
console.debug('flug mit 4711', fm.findById4(4711));

console.debug('flug mit 4711', fm.findByRoute('Graz', 'Flagranti'));

console.debug('Alle Flüge', fm.getFlightCount());