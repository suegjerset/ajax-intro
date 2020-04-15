// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();

// globals
const port = 5000;

// uses
app.use( bodyParser.urlencoded({extended : true}) );
app.use(express.static( 'server/public' ) );

// spin up server
app.listen( port, () => {
    console.log( 'server up on:', port );
}) // end server up

const people = ['Heather', 'Heather', 'Halima'];

// GET route
app.get( '/tester', ( req, res ) => {
    console.log( 'in /tester GET' ); // displays in terminal
    res.send( people ); // displays in browser
}); // end GET

// dEv example line 24: res.send( 'meow' );

// POST route
app.post('/tester', ( req, res) => {
    console.log( 'got to POST /tester', req.body ); // came from data in ajax
    people.push(req.body.name);
    console.log(people);
    res.send( 'woof' );
}); // end POST