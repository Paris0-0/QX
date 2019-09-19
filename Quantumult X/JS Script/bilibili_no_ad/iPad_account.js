let body = $response.body
body=JSON.parse(body)
    body['data']['ipad_sections'].splice(0,1)
    body['data']['ipad_sections'][0]['items'].splice(3,1)
    body['data']['ipad_sections'][0]['items'].splice(4,3)
    body['data']['ipad_sections'].splice(1,1)
    body=JSON.stringify(body)
$done({body})
