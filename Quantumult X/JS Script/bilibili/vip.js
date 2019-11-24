let obj = JSON.parse($response.body);
    obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});

/**
 * @supported F3F1280E2817 44243A07CAD1
 */