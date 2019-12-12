const cook="ct=18; cv=50910; guid=6E9BB363C6EF4D70AB6F966099D86111; login_type=1; qm_keyst=; skey=Mks05krsB9; uin=o1172056834; wxopenid=; wxrefresh_token=; wxuin=; pgv_pvid=5602133394"
var headers = $request.headers;
var str = "'" + JSON.stringify(headers) + "'";
var method2=(new Function("return " + str))();
var resut =JSON.parse(method2).Cookie;
if ( resut != cook ) {
	var tmp = resut.replace(/; /g,"-");
	$notify("Cookie", "", "shortcuts://run-shortcut?name=QQ%20music%20cookie&input="+tmp)
};