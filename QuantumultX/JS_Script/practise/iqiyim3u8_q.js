let obj = $request.url;
//obj="http://cache.video.iqiyi.com/dash?tvid=498306400&uid=1444759295&ut=1&ps=0&d=1&vid=1735c08c05b050c44e46a970caad1371&qypid=498306400_unknown&src=02032001010000000000&k_tag=1&k_uid=418A9781-CF46-4094-A14E-A3965BEABD9F&tm=1575452739399&bid=300&pt=2637000&s=0&rs=1&slid=0&sver=2&k_ver=10.11.0&messageId=pumaplayer_820f6ba610126525ddfced6a9d84c64d&k_ft1=740530527476653&k_err_retries=0&abid=300&lid=0&cf=0&ct=0&k_ft2=4159&k_ft4=1663053828&ori=puma&k_from=5&bp=1&dfp=8649460a5106734494a5ae34296280a5f6c71dba5827496a499e73887901c16dbd&from_type=5&from_sub_type=0&hdcp=2.2&k_ft5=3&applang=zh_CN&ve=7d7ea2b3f9414f70fd34ffda04ed8a1f&pano264=600&pano265=600&qd_v=1&vf=aa9e8a6006fb5d0df7014fc7f132d607";
obj=obj.replace(/&/g,"$");
url="通过jsbox解析cache中的m3u8文件\njsbox://run?name=iqiyim3u8_b.js&location=icloud&cacheurl="+obj;
$notify("", "", url);
//console.log(url)
