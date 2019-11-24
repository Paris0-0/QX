var obj = JSON.parse($response.body);
delete obj.adList;
$done({body: JSON.stringify(obj)});

/**
 * @supported F3F1280E2817 44243A07CAD1
 */
 