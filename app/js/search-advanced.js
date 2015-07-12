var document_tab={
    checks:["ldc", "lldc"],
    one_option_time:[{id:"DatePublished", val:"2002"}],
    two_option_time:[{id:"StrategyDate", vals:"[2006, 2010]"}],
    selects:[{id:"last_update", v:""}],
    inputs:["counterpart"]

};
var theme_tab={checks:["environment", "gender", "poverty_reduction", "youth", "export_strategy", "trade_focus",
    "facilitation", "finance", "information", "promotion", "quality", "tvet", "regional_scope", "regional_integration", "all_theme"
]};
var process_tab={checks:["action_plan", "nec", "resources_allocated", "country_owned", "itc", "participatory", "all_process"]};

function uncheck(id){
    $('#'+id).prop('checked', false);
}

function check(id){
    $('#'+id).prop('checked', true);
}

function uncheck_all(ids){
    ids.map(function(id){
        uncheck(id);
    });
}

function check_all(ids){
    ids.map(function(id){
        check(id);
    });
}

function is_checked(id){
    return  $('#'+id).prop('checked');
}

var all_checks=[].concat(document_tab.checks).concat(theme_tab.checks).concat(process_tab.checks);


$('#clear_filters').on("click", function(){
    all_checks.map(function(d){uncheck(d);});
});

$('#all_theme').on("click", function(){
    if(!is_checked("all_theme")){
        uncheck_all(theme_tab.checks);
    }else{
        check_all(theme_tab.checks);
    }

});

$('#all_process').on("click", function(){
    if(!is_checked("all_process")){
        uncheck_all(process_tab.checks);
    }else{
        check_all(process_tab.checks);
    }
});
