
let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body['data'].forEach((element, index)=> {
    if(element['author']['name']=="盐选推荐"){ 
          body['data'].splice(index,1)  
     }
 })
body=JSON.stringify(body)
$done({body})

/**
 * @supported F3F1280E2817 44243A07CAD1
 */