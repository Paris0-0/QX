var body = $response.body;
// var body = "http://59.83.230.143/newsts.tc.qq.com/Auf5dfGsdizlm0WDF2v7ZZAtjyVOIJXn3_S-SPjJ21rk/uwMROfz2r5xggaQXGdGnC2df57rkugreV3r6PwELrLu4asry/lqJaZFXCuh4efJonqcNkdR64CnebWRpDGXfjR2vUQUoaurJc6gem_TFoCHM34mLC1_lmDhy-ypohyMuB7vXh-HSM5mCnEf6kkrpz1snRdzcfXMxW9AR6iqeoBq5lfT3eW2oaEQhs3eBI9aO3m8x9X2Nayn9UmwdobUoQhlVpIwo/p0032vkdayh.322014.ts.m3u8";
   let pattern = /http:\/\/\d+.+?\.m3u8/g;
   let path = body.match(pattern);
   let url = path[0].replace("http","nplayer-http");
   url ="jsbox复制链接\njsbox://run?name=tencentm3u8.js&location=icloud&m3u8="+path[0] +"\n\nNplayer打开：\n" + url ;
$notify("已捕获到该视频m3u8地址", "", url);
// console.log(url)