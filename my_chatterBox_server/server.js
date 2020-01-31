database = [
    {id: 0, username: "pair4", text: "히히히", roomname: "내가 첫번째 방!", date: "2020-01-14T06:27:41.010Z"},
    {id: 1, username: "1빠", text: "놓쳤다..ㅠㅠ", roomname: " ", date: "2020-01-14T06:28:17.347Z"},
    {id: 2, username: "cheeseburger", text: "복습중", roomname: "내가 첫번째 방!", date: "2020-01-14T06:28:29.366Z"},
    {id: 3, username: "cheeseburger", text: "hi", roomname: "내가 첫번째 방!", date: "2020-01-14T06:29:14.700Z"},
    {id: 4, username: "joker", text: "string", roomname: "cs04", date: "2020-01-14T06:29:48.030Z"},
    {id: 5, username: "cheeseburger", text: "hi", roomname: " ", date: "2020-01-14T06:29:51.957Z"},
    {id: 6, username: "cheeseburger", text: "test", roomname: "cs04", date: "2020-01-14T06:30:37.434Z"},
    {id: 7, username: "cheeseburger", text: "testing", roomname: "cs04", date: "2020-01-14T06:31:07.890Z"},
    {id: 8, username: "jj", text: "반갑습니다.", roomname: "cs04", date: "2020-01-14T06:31:49.606Z"},
    {id: 9, username: "cheeseburger", text: "거의 다 왔다", roomname: "cs04", date: "2020-01-14T06:31:58.796Z"},
    {id: 10, username: "jj", text: "ㅇㄹㅇㄹㅇㄹ", roomname: "cs04", date: "2020-01-14T06:32:14.156Z"},
    {id: 11, username: "jj", text: "부럽습니다", roomname: "cs04", date: "2020-01-14T06:32:39.203Z"},
    {id: 12, username: "cheeseburger", text: "실험중", roomname: "cs04", date: "2020-01-14T06:35:25.503Z"},
    {id: 13, username: "cheeseburger", text: "hihihi", roomname: "cs04", date: "2020-01-14T06:37:22.081Z"},
    {id: 14, username: "Mel Brooks", text: "It's good to be the king", roomname: "lobby", date: "2020-01-14T06:37:55.227Z"},
    {id: 15, username: "Mel Brooks", text: "It's good to be the king", roomname: "lobby", date: "2020-01-14T06:37:57.958Z"},
    {id: 16, username: "minkyunglee", text: "왜왜", roomname: "eventtest", date: "2020-01-14T06:38:55.450Z"},
    {id: 17, username: "ㅁㄴㅇ", text: "ㅁㄴㅇ", roomname: "test", date: "2020-01-14T06:39:31.035Z"},
    {id: 18, username: "cheeseburger", text: "tasty", roomname: "test", date: "2020-01-14T06:40:41.990Z"},
    {id: 19, username: "jj", text: "망했다.", roomname: "cs04", date: "2020-01-14T06:42:12.227Z"},
    {id: 20, username: "cheeseburger", text: "지금도 될려나", roomname: "test", date: "2020-01-14T06:42:24.596Z"},
    {id: 21, username: "jj", text: "안녕", roomname: "cs04", date: "2020-01-14T06:42:36.425Z"},
    {id: 22, username: "cheeseburger", text: "testing", roomname: "test", date: "2020-01-14T06:42:54.524Z"},
    {id: 23, username: "jj", text: "안녕", roomname: "cs04", date: "2020-01-14T06:43:50.133Z"},
    {id: 24, username: "jj", text: "안녕", roomname: "cs04", date: "2020-01-14T06:43:51.670Z"},
    {id: 25, username: "cheeseburger", text: "hihihi", roomname: "test", date: "2020-01-14T06:44:06.663Z"},
    {id: 26, username: "cheeseburger", text: "cheeseburger", roomname: " ", date: "2020-01-14T06:44:35.830Z"},
    {id: 27, username: "jj", text: "ㅇㄹㄴㄹ", roomname: "cs04", date: "2020-01-14T06:44:47.617Z"},
    {id: 28, username: "cheeseburger", text: "HIHIHI", roomname: "eventtest", date: "2020-01-14T06:46:25.052Z"},
    {id: 29, username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby", date: "2020-01-14T06:47:04.182Z"},
    {id: 30, username: "Mel Brooks", text: "It's good to be the king", roomname: "lobby", date: "2020-01-14T06:47:04.186Z"},
    {id: 31, username: "Mel Brooks", text: "It's good to be the king", roomname: "lobby", date: "2020-01-14T06:47:07.661Z"},
    {id: 32, username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby", date: "2020-01-14T06:47:07.662Z"},
    {id: 33, username: "jj", text: "dfasf", roomname: "cs04", date: "2020-01-14T06:47:07.916Z"},
    {id: 34, username: "Mel Brooks", text: "It's good to be the king", roomname: "lobby", date: "2020-01-14T06:48:01.627Z"},
    {id: 35, username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby", date: "2020-01-14T06:48:01.644Z"},
    {id: 36, username: "Mel Brooks", text: "Never underestimate the power of the Schwartz!", roomname: "lobby", date: "2020-01-14T06:48:05.473Z"}
]

const express = require('express')
const bodyparser = require('body-parser') 
const cors = require('cors')
const server = express()
const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
}
const headers = defaultCorsHeaders
// headers['Content-Type'] = 'text/plain'
headers['Content-Type'] = 'application/json'
const port = 3000

// CORS 허용
server.use(cors())
// bodyparser를 이용한 body 정리
server.use(bodyparser.urlencoded({extended: false}))
server.use(bodyparser.json())

server.get('/messages', (req, res, next) => {
    res.status(200).json(database)
})


server.post('/messages', (req, res, next) => {
    let addData = {}
    let index = Object.keys(database).length
    let body = req.body

    addData.id = index
    for(let key in body){
        addData[key] = body[key]
    }
    addData.date = Date()

    console.log(addData)

    database[index] = addData

    res.status(200).json(database)

})

server.listen(port, () => console.log(`Listening on ${port}`))


