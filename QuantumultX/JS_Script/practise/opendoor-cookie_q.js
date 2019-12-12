var body = $request.headers;
   let obj = JSON.stringify($request.headers);
   // console.log(body);
   // console.log(obj);
   let pattern = /eyJhb.+?\"\,\"/g;
   var test = obj.match(pattern);
   obj = test[0].match(/[\w\_\-\.]+/g);
$notify("点击更新开门捷径", "", "shortcuts://run-shortcut?name=%E5%BC%80%E9%97%A8&input="+obj)
