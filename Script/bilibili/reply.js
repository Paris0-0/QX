let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})

/**
 * @supported F3F1280E2817 44243A07CAD1
 */