var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 

/**
 * @supported F3F1280E2817 44243A07CAD1
 */
