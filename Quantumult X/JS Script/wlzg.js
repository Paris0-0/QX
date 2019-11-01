var obj = JSON.parse($response.body);
    obj.data.gateServerInfo.address="127.0.0.1";
$done({ body: JSON.stringify(obj) });

/**
 * @supported F3F1280E
 */