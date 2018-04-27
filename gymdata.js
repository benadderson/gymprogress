/*
Raw gym data - include a different file for different city

NEVER change order of gyms or delete gyms
ONLY append at the end, and mark deleted gyms with 'deleted: true'
BECAUSE progress is stored in user's localStorage by gym index

Entries for each gym:
{
  name: "The Gym Name",                // required
  location: [latitude,longitude],      // required
  district: "A Neighborhood",          // optional, used for sorting by neighborhood
  address: "e.g. street and house#",   // optional, used as label for google maps link
  park: true | "OSM feature",          // optional, potential EX raid location. If string, link to that OSM feature
  exraid: true,                        // optional, confirmed EX raid location (a raid actually happened here)
  deleted: true,                       // optional, used for hiding removed gyms without changing IDs
  
  // added by program in getGyms()
  id: number,                          // index in this list. THIS MUST NEVER CHANGE!
}
*/

function gymData() {
    return {
    city: "GB-EY", // country-city (used in localStorage key to allow tracking multiple cities)
    gyms: [
    {name: "Another City Of Ely Play Area", district: "", location: [52.406003,0.251506]},
    {name: "Bishop Woodford", district: "", location: [52.39617,0.259488]},
    {name: "Brooke Grove Playground", district: "", location: [52.4022542,0.2449205]},
    {name: "Cemetery Chapel", district: "", location: [52.403649,0.273051]},
    {name: "Drayman's Son Micro-Pub", district: "", location: [52.398299,0.267773]},
    {name: "Ely Cathedrals Broken Tower", district: "", location: [52.398924,0.262804], exraid: true},
    {name: "Ely Golf Clubhouse", district: "", location: [52.3922399,0.2482912]},
    {name: "Ely Porta", district: "", location: [52.396694,0.261963]},
    {name: "Ely Station", district: "", location: [52.390806,0.266494]},
    {name: "Ely Tigers Rugby Club", district: "", location: [52.410644,0.24938]},
    {name: "Kingfisher Statue", district: "", location: [52.397735,0.276457], exraid: true}, 
    {name: "Larkfield Community", district: "", location: [52.406402,0.27403]},
    {name: "Lincoln Bridge", district: "", location: [52.39555,0.270799]},
    {name: "Oliver Cromwell's House", district: "", location: [52.398774,0.259111]},
    {name: "Queen Victoria Diamond Jubilee", district: "", location: [52.400338,0.268673], exraid: true},
    {name: "Reed Carving", district: "", location: [52.397428,0.276072], exraid: true},
    {name: "Russian Cannon Ely", district: "", location: [52.398951,0.261149], exraid: true},
    {name: "Sacrist's Gate", district: "", location: [52.399234,0.264628]},
    {name: "St Mary's Parish Church", district: "", location: [52.398657,0.259606]},
    {name: "The Castle", district: "", location: [52.402929,0.270277]},  
    {name: "The South Boundary", district: "", location: [52.390887,0.268146]},
    {name: "Tree Tunnel", district: "", location: [52.396107,0.265418], exraid: true},
    {name: "Water Tower", district: "", location: [52.395478,0.252893]},
    {name: "Wooden Kingfisher Trail Marker", district: "", location: [52.399133,0.277071], park: true},
    //{name: "", district: "", address: "", location: []},
    ],
    // local names for Level 12 cells
    cells: {
        '47af5f5': 'Zelle 1 (Nördl. Altstadt)',
        '47af5894': 'Zelle 23c',
    },
    };
}
