// Simulação de um robô de entrega

// LISTA COM POSSIVEIS LOCAIS PELO QUAL O ROBÔ DEVE PASSAR
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
  ];

// FUNÇÃO QUE VERIFICA SE O ROBÔ TEM MEMÓRIO, SE ELA ESTIVER VAZIA, ELE DEFINE A ROTA COMO 'MAILROUTE', DEPOIS SE MOVE NA DIREÇÃO DO PROXIMO LOCAL
function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

// ESSA FUNÇÃO ENCONTRA A ROTA MAIS CURTA ENTRE DOIS LOCAIS 
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }

  // FFUNÇÃO QUE CALCULA DINAMINCAMNTE A ROTA MAIS EFICIENTE PARA BUSCAR ENTREGAR PACOTES
  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

  runRobotAnimation(VillageState.random(), routeRobot, []);
