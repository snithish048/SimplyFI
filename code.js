const tickets = [
    ["Paris", "Skopje"], ["Zurich", "Amsterdam"], ["Prague", "Zurich"],
    ["Barcelona", "Berlin"], ["Kiev", "Prague"], ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"], ["Berlin", "Kiev"], ["Berlin", "Amsterdam"]
];

function traceRoute(start, tickets) {
    let route = [start];
    let visited = new Set();

    function analyseTickets(currentCity) {
        if (route.length === 6) {
            return true;
        }

        for (let [from, to] of tickets) {
            if (from === currentCity && !visited.has(`${from}-${to}`)) {
                visited.add(`${from}-${to}`);
                route.push(to);

                if (analyseTickets(to)) {
                    return true;
                }

                route.pop();
                visited.delete(`${from}-${to}`);
            }
        }

        return false;
    }

    analyseTickets(start);
    return route;
}

let startCity = 'Kiev';
let route = traceRoute(startCity, tickets);
console.log(route);
