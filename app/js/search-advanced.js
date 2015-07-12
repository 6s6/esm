var select_filters=["select_country","select_region", "select_sector", "select_document_type"];
var document_tab={
    checks:["ldc", "lldc"],
    one_option_time:[{id:"DatePublished", val:"2002"}],
    two_option_time:[{id:"StrategyDate", vals:"[2006, 2010]"}],
    selects:["last_update"],
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
function get_selectize_value(id){
return $("#"+id).selectize()[0].selectize.getValue();
}
function get_slider_value(id){
    return $("#"+id).slider().slider('getValue');
}
var all_checks=[].concat(document_tab.checks).concat(theme_tab.checks).concat(process_tab.checks);


$('#clear_filters').on("click", function(){
    all_checks.map(function(d){uncheck(d);});
    select_filters.concat(document_tab.selects).map(function(s){
         $('#'+s).selectize()[0].selectize.clear();
    });
    document_tab.inputs.map(function(s){
        $("#"+s).val("");
    });

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

$('#apply_filters').on("click", function colect_all_values(){
    alert("look at the console to see which values are used in this search");
    console.log("main select menu:");
    select_filters.map(function(s){
        console.log(s, get_selectize_value(s));
    });
    console.log("\n\n Document_tab:");
    console.log(" - checkboxes:");
    document_tab.checks.map(function(d){console.log(d, "is_checked?", is_checked(d));});

    console.log("DatePublished", get_slider_value("DatePublished"));
    console.log("StrategyDate", get_slider_value("StrategyDate"));
    console.log("- last_update", get_selectize_value("last_update"));
    console.log("- counterpart", $("#counterpart").val());

    console.log("\n\n Theme_tab:");
    console.log(" - checkboxes:");
    theme_tab.checks.map(function(d){console.log(d, "is_checked?", is_checked(d));});

    console.log("\n\n Process_tab:");
    console.log(" - checkboxes:");
    process_tab.checks.map(function(d){console.log(d, "is_checked?", is_checked(d));});

    });
