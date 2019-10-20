var body = $response.body;
var obj = JSON.parse(body);

    obj.account.pro_mode=true;
    obj.account.plan_type="Premium";
    obj.account.user_type="Premium";
    obj.account.current_period.until="2099-09-23T07:55:48";
    obj.account.team=true;
    obj.account.team_display_name="WYZ";
    obj.trial.valid_until="2099-09-23T07:55:48";
    obj.trial.is_active=true;

body = JSON.stringify(obj); 
$done({body});
