const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://kentmima:password@cluster0.pgh4tau.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const movies = database.collection('notes');
// idが１のデータを更新
const movie = await movies.replaceOne(
{
id: 1,
title: 'ノート１のタイトルです',
subTitle: 'ノート１のサブタイトルです',
bodyText: 'ノート１の本文です'
},
{
id: 1,
title: 'ノート１のタイトル更新しました',
subTitle: 'ノート１のサブタイトルです',
bodyText: 'ノート１の本文です'
});
console.log(movie);
// 最後にクロースする
await client.close();
}
run()