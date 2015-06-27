$.extend($.fn.bootstrapTable.defaults, {classes:'table'});

function titleFormatter(value){
    return "<a href=\"search_details.html#\">"+value+"</a>";

}
function sectorsFormatter(value){
    var screen_bigger=$( window ).width()>760;
    var chunk=3;
    var css_class="col-sm-4";
    if(screen_bigger){
        chunk=6;
        css_class="col-sm-2";

    }

//    alert(more_bigger);
    function row(row_data){return "<div class='row' style='margin-left: -38px;margin-bottom: 10px;'>"+row_data+"</div>";}
    function extractRowData(value){

        return value.map(function(s){return "<div class='"+css_class+"'><div class=\"label label-default label-table "+css_class+"\"><div class=\" \">"+s+"</div></div></div>";}).join(" ");
    }
    function r(i){
        return row("<ul id=\"grid\">" +extractRowData(i)+"</ul> ");
    }


    var i,j,temparray=[];
    for (i=0,j=value.length; i<j; i+=chunk) {
        temparray.push(value.slice(i,i+chunk));
        // do whatever
    }

    return "<div class=\"container-fluid\">"+temparray.map(r).join("")+" </div>";
}
function regionFormatter(value) {
    return value;
}
function countryFormatter(value) {
    return value;
}
function countryCodeFormatter(value) {
    return "("+value+")";
}

function typeFormatter(value){
    return "<span class=\"label label-default label-type\" >"+value+"</span>";
}
function leftSorter(a, b) {
    return a.country.localeCompare(b.country);
}
function leftFormatter(value) {
    var t=regionFormatter(value.region);
    var c=countryFormatter(value.country);
    var cc=countryCodeFormatter(value.countryCode);
    return "<div class='left-first-colum-first-row' ><span class='left-table-row-title'>Region</span><span style='float:right' class='table-value boldi' >"+t+"</span></div> \
<div  style='margin-top:8px;' class='left-first-colum-first-row'><span class='left-table-row-title'>Country:</span><div style='float:right'> \
<span  class='table-value boldi'> "+c+"</span> \
<span style='color:black;' class='table-value boldi'>"+cc+"</span> \
</div></div> \
<div style='margin-top:18px;padding:10px;border:1px solid rgb(187, 187, 187);'><img src='/img/maps/"+value.region+".png' width='100%'></div>";
}
function middleSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function middleFormatter(value) {
    return "<div class='middle-column'><h2 class='middle-column-title'>"+titleFormatter(value.title)+"</h2> \
"+wrap_show_less("eval-text", value.description)+" \
<h3 class='middle-column-sectors'>Sectors:</h3> "+wrap_show_less("eval-sectors", sectorsFormatter(value.sectors));
}
function rightSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function rightFormatter(value) {
    var t=typeFormatter(value.type);
    var year=+value.year;
    var iP= value.implementationPeriod;
    return "<div class='first-colum-first-row' style='padding-top:20px;'><span class='table-row-title'>Type: </span><span style='float:right' class='table-value ' >"+t+"</span><hr class='hr-table-column'></div> \
<div   class='left-first-colum-first-row'><span class='left-table-row-title'>Year:</span><div style='float:right'> \
<span  class='table-value boldi'> "+year+"</span> \
</div></div> \
<div   class='left-first-colum-first-row'><span class='left-table-row-title'>Period:</span><div style='float:right'> \
<span  class='table-value boldi'> "+iP+"</span> \
</div></div> \
<div class='last-update-div'> <span class='last-update'>last update: </span><span class='last-update-value'>"+value.lastUpdate+"</span></div></div>"


}
function yearFormatter(value){
    return value;
}

var data=[
    {
            left: {region: "Europe", country:"Spain", countryCode:"ESP"},
            middle: {title: "ESP-Diagnostic Trade Integration Study - Espain",
                description:"The document analyzes the current economic situation and the determinants of poverty in Angola, and it outlines policy actions in ten main areas of intervention: 1) probation; 2) demining; 3) food security and rural development; 4) HIV/AIDS; 5) Education; 6) Health; 7) Basic infrastructures; 8) professional training and employment; 9) governance; 10) macroeconomic governance. \
The DTIS provides an overview of the current economic situation in Angola and of the main issues regarding poverty and trade. It analyses the key problems affecting infrastructures, trade regime and institutions, commercial barriers, trade facilitation and private sector development. \
The Programme of Cooperation is aligned with the Common Country Programme Document, the National Strategy for Development and Integration 2007-2013 and the Millennium Development Goals. Hence, the goal of the Programme is to promote fair and sustainable development, social inclusion, respect of international standards and obligations in light of the integration of Albania into the European Union. Specific expected outcomes are identified within four main areas of intervention: governance and rule of law, economy and environment, regional and local development, inclusive and social policy.", sectors:["Coffee", "Cashew","Farming" , "Lorem", "sector1", "sector2", "sector3", "sector4", "sector5", "sector6", "sector7", "sector8","Coffee", "Cashew","Farming" , "Lorem", "sector1", "sector2", "sector3", "sector4", "sector5", "sector6", "sector7", "sector8"]

            },
            right: {type: "UNAAF",
                year:2003, implementationPeriod:"2007-2010",lastUpdate:"Thu May 28 2015"}

    },
    {
            left: {region: "Africa", country:"Benin", countryCode:"BEN"},
            middle: {title: "Diagnostic Trade Integration Study - Benin",
                description:"Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism,Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism", sectors:["Coffee", "Cashew","Farming" , "Lorem"]
            },

            right: {type: "UNAAF",
                year:2005, implementationPeriod:"2008-2012",lastUpdate:"Fry Jul 13 2012"}
        }];

function resultTableOptions(the_data){
    return {
        method:'get',
    cache: false,
    striped: false,
    pagination: true,
    pageSize: 5,
    pageList: [10, 25, 50, 100, 200],
    search: false,
    showRefresh: false,
    showColumns: false,
    minimumCountColumns: 2,
    showHeader:false,
    clickToSelect: false,
    iconsPrefix: 'fa',
    toolbar: '#custom-toolbar',
    toolbarAlign: "right",
    icons: {
	paginationSwitchDown: 'fa-collapse-down icon-chevron-down',
	paginationSwitchUp: 'fa-collapse-up icon-chevron-up',
	refresh: 'fa-refresh icon-refresh',
	toggle: 'fa-list-alt icon-list-alt',
	columns: 'fa-th icon-th'
    },
    data:the_data ,
    columns: [
        {
	    field: "left",
	    title: "left",
	    sortable: true,
            sorter:"leftSorter",
	    valign: "top",
	    align: "left",
	    description: "left header description",
            formatter:"leftFormatter",
            class:"col-md-2"

	},
        {
	    field: "middle",
	    title: "middle",
	    sortable: true,
            sorter:"middleSorter",
	    valign: "top",
	    align: "left",
	    description: "middle header description",
            formatter:"middleFormatter",
            class:"col-md-7"
	},
        {
	    field: "right",
	    title: "right",
	    sortable: true,
            sorter:"rightSorter",
	    valign: "top",
	    align: "left",
	    description: "right header description",
            formatter:"rightFormatter",
            class:"col-md-3"
	},
    ]
};}
var $resultTableContainer = $('.results-table');
var $resultTable = $resultTableContainer.find('table');
$resultTable.bootstrapTable(resultTableOptions(data));

var $tableHeadings = $resultTable.find('thead tr th');

/*
$.each(resultTableOptions.columns, function(columnIdx, columnData){
    var $header = $($tableHeadings.get(columnIdx));
    $header.tooltip({
	title: columnData.description,
	container:$resultTableContainer
    });
});
*/
$('.fixed-table-toolbar').prepend($('.pagination-detail').html()).addClass('text-muted');

function is_asc(order_id){
    if(order_id==="asc"){
        return true;
    }else{
        return false;
    }

}
function compare_strings(place, data_id, asc){
    return function (a, b) {
        if(asc){
            return a[place][data_id].localeCompare(b[place][data_id]);
        }else{
            return b[place][data_id].localeCompare(a[place][data_id]);
        }
        };
}

function compare_numbers(place, data_id, asc){
    return function (a, b) {
        if(asc){
            return a[place][data_id] - b[place][data_id];
        }else{
            return b[place][data_id] - a[place][data_id];
        }
        };
}

function order_by(id, asc){
    if(id==="region"){
        data.sort(compare_strings("left", id, asc));
        return data;
    }else if(id==="country"){
        data.sort(compare_strings("left", id, asc));
        return data;
    }else if(id==="countryCode"){
        data.sort(compare_strings("left", id, asc));
        return data;
    }else if(id==="title"){
        data.sort(compare_strings("middle", id, asc));
        return data;
    }else if(id==="year"){
        data.sort(compare_numbers("right", id, asc));
        return data;


    }else if(id==="implementationPeriod"){
        data.sort(compare_strings("right", id, asc));
        return data;
    }else if(id==="lastUpdate"){
        data.sort(compare_strings("right", id, asc));
        return data;
    }else{
        console.error("error: this id is not allowed: "+id);
    }
}
$('#sorter').on('change', function() {
    var r={};
    $.extend(true, r , resultTableOptions(data));
//        r.showHeader=true;
 //       r.showRefresh=false;
//        r.data=data;
//        r.showColumns= true;
    //        alert("value_selected:"+ this.value);

    r.data=order_by(this.value, is_asc($('#sorter-how').val()));
    $('.results-table').find('table').bootstrapTable('destroy');
    $('.results-table').find('table').bootstrapTable(r);
    evaluate_show_less("short-text full-text");
});

$('#sorter-how').on('change', function() {
    var r={};
    $.extend(true, r , resultTableOptions(data));
//        r.showHeader=true;
 //       r.showRefresh=false;
//        r.data=data;
//        r.showColumns= true;
    //        alert("value_selected:"+ this.value);

    r.data=order_by($('#sorter').val(), is_asc(this.value));
    $('.results-table').find('table').bootstrapTable('destroy');
    $('.results-table').find('table').bootstrapTable(r);
    evaluate_show_less("short-text full-text");
});
