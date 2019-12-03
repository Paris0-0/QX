var body = $response.body;

   let pattern = /http:\/\/\d+.+?\.m3u8/g;
   var path = body.match(pattern);

$notify("捕获视频m3u8", "", path[0])