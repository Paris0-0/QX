var body = $response.body;
var obj = JSON.parse(body);

obj.account.pro_mode=true
obj.account.plan_type="Trial";
obj.account.user_type="Trial";
obj.account.current_period.until="2099-09-23T07:55:48";
obj.account.team=true;
obj.account.team_display_name="WYZ";
obj.trial.valid_until="22099-09-23T07:55:48";
obj.trial.is_active=true;

body = JSON.stringify(obj); 
$done({body});