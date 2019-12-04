var body = $request.headers;
   let obj = JSON.stringify($request.headers);
   console.log(body);
   console.log(obj);
   let pattern = /eyJhb.+?\"\,\"/g;
   var test = obj.match(pattern);
   obj = test[0].match(/[\w\_\-\.]+/g);

$notify("点击更新开门捷径", "", "jsbox://run?name=Opendoor.js&location=icloud&text="+obj)
