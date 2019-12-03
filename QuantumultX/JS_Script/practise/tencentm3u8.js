var body = $response.body;

   let pattern = /http:\/\/\d+.+?\.m3u8/g;
   var path = body.match(pattern);

$notify("已捕获到该视频m3u8地址", "", path[0])