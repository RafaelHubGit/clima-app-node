
const {getLugarLatLng} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd', 
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// getLugarLatLng( argv.direccion )
//     .then( console.log );

// getClima( 40.750000, -74.000000 )
//     .then( console.log )
//     .catch( console.log)


const getInfo = async ( direccion ) => {

    try {
        const latLng = await getLugarLatLng( direccion );

        const lugar = latLng.direccion;
        const lat = latLng.lat;
        const lng = latLng.lng;

        const clima = await getClima( lat, lng );

        return `El clima de ${lugar} es de ${clima}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    

}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );