'use strict';

angular.module('calendrierApp')
    .controller('DetailCtrl',  function($scope, $routeParams ){
        $scope.msg = 'ok'

    } )

  .controller('MainCtrl', function ($scope, $window) {

    $scope.alert = function(status){
        $window.alert(status);
    }

    $scope.calendrier = {
 "kind": "calendar#events",
 "summary": "Nicolas MERVAILLIE",
 "updated": "2013-12-06T08:53:02.248Z",
 "items": [
  {

   "kind": "calendar#event",
   "id": "8kj7i3h021en83odnennmloun0_20131211T080000Z",
   "status": "confirmed",
   "created": "2013-07-08T07:32:05.000Z",
   "updated": "2013-07-08T07:32:30.647Z",
   "summary": "[CRA] KITS cellule agile",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-11T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-11T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "8kj7i3h021en83odnennmloun0_20131218T080000Z",
   "status": "confirmed",
   "created": "2013-07-08T07:32:05.000Z",
   "updated": "2013-07-08T07:32:30.647Z",
   "summary": "[CRA] KITS cellule agile",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-18T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-18T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "3h4h465urs61pd381h7f3pa8g4_20131216T080000Z",
   "status": "confirmed",
   "created": "2013-10-02T14:44:33.000Z",
   "updated": "2013-10-02T14:44:33.203Z",
   "summary": "[CRA] DKT - coaching comdata",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-16T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-16T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "rigk6gp7j8u1m1h2k4g6bng6fc",
   "status": "confirmed",
   "created": "2013-11-22T09:23:53.000Z",
   "updated": "2013-11-22T09:23:53.410Z",
   "summary": "Code Retreat Lille #5",
   "description": "For details, link here: https://crlille5.eventbrite.fr",
   "location": "Proxiad - 19 avenue le Corbusier - 59000 Lille - France",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-14T08:30:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-14T18:30:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "tfr5v5p1v2o76vail7np2oeqbo",
   "status": "confirmed",
   "created": "2013-11-26T10:02:20.000Z",
   "updated": "2013-11-26T10:02:20.491Z",
   "summary": "Conges",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-26T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-26T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "80grb41o7e7npht00i5ntff4j8",
   "status": "confirmed",
   "created": "2013-11-26T10:02:24.000Z",
   "updated": "2013-11-26T10:02:24.457Z",
   "summary": "Conges",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-27T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-27T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "h4e1l1gp0e9e8b8cvuptu01i6c",
   "status": "confirmed",
   "created": "2013-11-26T10:02:33.000Z",
   "updated": "2013-11-26T10:02:33.160Z",
   "summary": "Conges",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-30T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-30T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "tprcu64c9nonl16dvn8eohv14k",
   "status": "confirmed",
   "created": "2013-11-26T10:02:37.000Z",
   "updated": "2013-11-26T10:02:37.365Z",
   "summary": "Conges",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-31T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-31T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "d5rrk6saop10jr3jdg4jt2fnfc",
   "status": "confirmed",
   "created": "2013-12-02T13:29:56.000Z",
   "updated": "2013-12-02T13:29:56.138Z",
   "summary": "[CRA] DKT - coaching first",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-17T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-17T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "gbgsibk6a38knl7jfm9vnbqums",
   "status": "confirmed",
   "created": "2013-12-02T13:29:58.000Z",
   "updated": "2013-12-02T13:29:58.727Z",
   "summary": "[CRA] DKT - coaching first",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-19T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-19T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "8ck3hdo6oe647lodr0br7oc19c",
   "status": "confirmed",
   "created": "2013-11-28T15:20:25.000Z",
   "updated": "2013-12-02T13:30:14.084Z",
   "summary": "pot avec fred cormont",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-12T19:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-12T21:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "8o6f4k8afihco5mmptvvlvml5s",
   "status": "confirmed",
   "created": "2013-12-02T13:30:55.000Z",
   "updated": "2013-12-02T13:30:55.464Z",
   "summary": "[CRA] DKT - coaching comdata",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-23T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-23T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "k4t9c6hidgg9rbuq0tjrtm5p7c",
   "status": "confirmed",
   "created": "2013-12-02T13:31:05.000Z",
   "updated": "2013-12-02T13:31:05.090Z",
   "summary": "[CRA] DKT - coaching first",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-24T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-24T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "1jetcakrb7p9s428uudo65ih84",
   "status": "confirmed",
   "created": "2013-12-05T08:17:07.000Z",
   "updated": "2013-12-05T08:17:07.586Z",
   "summary": "[CRA] TNR ",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-09T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-09T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "rkc934tja410usdboqv8lb0k8g",
   "status": "confirmed",
   "created": "2013-12-05T08:17:12.000Z",
   "updated": "2013-12-05T08:17:12.942Z",
   "summary": "[CRA] TNR ",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-10T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-10T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "s035bjbgihnmedpcpc4nmlcl00",
   "status": "confirmed",
   "created": "2013-12-05T08:17:15.000Z",
   "updated": "2013-12-05T08:17:15.974Z",
   "summary": "[CRA] TNR ",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-12T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-12T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "nc8clivcfdqi2raqc6tjg8spp4",
   "status": "confirmed",
   "created": "2013-12-05T08:17:18.000Z",
   "updated": "2013-12-05T08:17:18.618Z",
   "summary": "[CRA] TNR ",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-13T09:00:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-13T18:00:00+01:00"
   }
  },
  {

   "kind": "calendar#event",
   "id": "3dtbocgahkuf8a62dhi406lg44",
   "status": "confirmed",
   "created": "2013-12-05T17:18:30.000Z",
   "updated": "2013-12-06T08:53:02.085Z",
   "summary": "Coding autour d'angularJS",
   "description": "On en avait parlé, allez on se lance.\nJe vous propose une petite séance de découverte et de coding participatif autour de cette techno. L'idée est de présenter un peu les principes, les outils, et de commencer à coder ensemble une petite application avec tout ça\n\nComme on fait ça le midi, on commande des pizzas...",
   "location": "Salle de réunion, à l'agence",
   "creator": {
    "email": "nmervaillie@gmail.com",
    "self": true
   },
   "organizer": {
    "email": "nmervaillie@gmail.com",
    "displayName": "Nicolas MERVAILLIE",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-09T12:15:00+01:00"
   },
   "end": {
    "dateTime": "2013-12-09T13:40:00+01:00"
   }
  }
 ]
};
  });
