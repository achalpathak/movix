const express = require("express");
const cors = require("cors");
const { checkAuthorization } = require('./middleware');

const app = express();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "*",
    credentials: true
};

app.use(cors(corsOptions));

// const allowCrossDomain = function(req, res, next) {
//     console.log("asdasdads",req.headers);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   };
  
// app.use(allowCrossDomain);

app.use(checkAuthorization);


// simple route
app.get("/", (req, res) => {
    return res.json({ 'text': 'नमस्ते' });
});

app.get("/movie/upcoming", (req, res) => {
    const res_data = {
        "results": [
          {
            "adult": false,
            "backdrop_path": "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
            "genre_ids": [
              16,
              35,
              10751,
              14
            ],
            "id": 867693,
            "original_language": "en",
            "original_title": "Ron's Gone Wrong",
            "overview": "The story of Barney, an awkward middle-schooler and Ron, his new walking, talking, digitally-connected device. Ron's malfunctions set against the backdrop of the social media age launch them on a journey to learn about true friendship.",
            "popularity": 155.076,
            "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
            "release_date": "2021-10-21",
            "title": "Ron's Gone Wrong",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
          },
          {
            "adult": false,
            "backdrop_path": "/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg",
            "genre_ids": [
              35,
              10749,
              18
            ],
            "id": 800401,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A romantic comedy about a reclusive novelist and a Hollywood movie star who must team up to stop a rival archaeologist from unleashing the mythological power of the Greek gods.",
            "popularity": 135.937,
            "poster_path": "/zogWnCSztU8xvabaepQnAwsOtOt.jpg",
            "release_date": "2022-04-15",
            "title": "The Lost City",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
          },
          {
            "adult": false,
            "backdrop_path": "/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
            "genre_ids": [
              28,
              12,
              35
            ],
            "id": 799363,
            "original_language": "en",
            "original_title": "Argylle",
            "overview": "Argylle follows the world's greatest spy as he is caught up in a globe-trotting adventure. ",
            "popularity": 125.213,
            "poster_path": "/jkBsuE5GnT6Vu2ZxY7PXJ0WXtP.jpg",
            "release_date": "2022-08-18",
            "title": "Argylle",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
          }
        ],
        "total_pages": 28,
        "total_results": 542
      }
      
    return res.json(res_data);
});


app.get("/movie/popular", (req, res) => {
    const res_data = {
        "page": 1,
        "total_results": 10000,
        "total_pages": 500,
        "results": [
          {
            "popularity": 2539.017,
            "vote_count": 4582,
            "video": false,
            "poster_path": "/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
            "id": 637649,
            "adult": false,
            "backdrop_path": "/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
            "original_language": "en",
            "original_title": "Wrath of Man",
            "genre_ids": [
              80,
              28,
              53
            ],
            "title": "Wrath of Man",
            "vote_average": 7.8,
            "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
            "release_date": "2021-04-22"
          },
          {
            "popularity": 1662.165,
            "vote_count": 4075,
            "video": false,
            "poster_path": "/8ChCpCYxh9YXusmHwcE9YzP0TSG.jpg",
            "id": 399566,
            "adult": false,
            "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
            "original_language": "en",
            "original_title": "Godzilla vs. Kong",
            "genre_ids": [
              878,
              28,
              18
            ],
            "title": "Godzilla vs. Kong",
            "vote_average": 8,
            "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet clash in a spectacular battle for the ages.",
            "release_date": "2021-03-24"
          },
          {
            "popularity": 1166.345,
            "vote_count": 593,
            "video": false,
            "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
            "id": 817451,
            "adult": false,
            "backdrop_path": "/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
            "original_language": "en",
            "original_title": "Endangered Species",
            "genre_ids": [
              28,
              53,
              12,
              18
            ],
            "title": "Endangered Species",
            "vote_average": 6.7,
            "overview": "Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival.",
            "release_date": "2020-03-24"
          }
        ]
    }
    return res.json(res_data);
});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
