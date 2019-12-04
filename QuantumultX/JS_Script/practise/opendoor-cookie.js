var body = $request.headers;
   let obj = JSON.stringify($request.headers);
   console.log(body);
   console.log(obj);
   let pattern = /eyJhb.+?\"\,\"/g;
   let test = obj.match(pattern);

$notify("点击复制Cookies", "", "jsbox://run?name=Opendoor.js&location=icloud&text="+test[0])
