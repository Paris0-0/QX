let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})


/**
 * @supported F3F1280E2817 44243A07CAD1
 */