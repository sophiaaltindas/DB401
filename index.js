require('./database-connection')

const Comment = require('./models/comment')
const Movie = require('./models/movie')

async function main() {
  // const popularmoviesByDayOfWeek = await Movie.aggregate([
  //   {
  //     $group: {
  //       _id: { $isoDayOfWeek: '$released' },
  //       count: { $sum: 1 },
  //       avgRating: { $avg: '$imdb.rating' },
  //       stdDev: { $stdDevPop: '$imdb.rating' },
  //     },
  //   },
  //   { $sort: { avgRating: -1 } },
  // ])

  const res = await Movie.aggregate([
    { $unwind: { path: '$genres' } },
    { $match: { 'imdb.rating': { $gt: 1 } } },
    { $project: { title: 1, genres: 1, 'imdb.rating': 1 } },
    { $sort: { 'imdb.rating': -1 } },
    {
      $group: {
        _id: '$genres',
        genres: {
          $firstN: {
            input: ['$title', '$imdb.rating'],
            n: 3,
          },
        },
      },
    },
  ])

  // console.log(await Movie.findOne())
  console.log(res)

  const av = await Movie.aggregate([
    { $unwind: { path: '$genres' } },
    { $project: { genres: 1, 'imdb.rating': 1 } },
    { $group: { _id: '$genres', avgRating: { $avg: '$imdb.rating' } } },
    { $sort: { avgRating: -1 } },
    { $limit: 1 },
  ])

  console.log(av)
}

main()
