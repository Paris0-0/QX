let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(["追番","推荐","直播","热门","影视"].includes(element["name"]))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

delete body['data']['top']
body=JSON.stringify(body)
$done({body}) 
