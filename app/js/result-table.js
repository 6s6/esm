$.extend($.fn.bootstrapTable.defaults, {classes:'table'});

function titleFormatter(value){
    return "<a href=\"search_details.html#\">"+value+"</a>";

}
function sectorsFormatter(value){

    function row(row_data){return "<div class='row' style='margin-left: -38px;margin-bottom: 10px;'>"+row_data+"</div>";}
    function extractRowData(value){
        return value.map(function(s){return "<div class='col-sm-2'><div class=\"label label-default label-table col-sm-2\"><div class=\" \">"+s+"</div></div></div>";}).join(" ");
    }
    function r(i){
        console.log(i);
        return row("<ul id=\"grid\">" +extractRowData(i)+"</ul> ");}


    var i,j,temparray=[],chunk = 6;
for (i=0,j=value.length; i<j; i+=chunk) {
    temparray.push(value.slice(i,i+chunk));
    // do whatever
}
console.log("temparray", temparray);

 return "<div class=\"container-fluid\">"+temparray.map(r).join("")+" </div>";


    //return value.map(function(s){return "<span class=\"label label-default label-table\">"+s+"</span>";}).join(" ");


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
    return "<span class=\"label label-default\">"+value+"</span>";
    }
function leftSorter(a, b) {
    return a.country.localeCompare(b.country);
}
function leftFormatter(value) {
    var t=regionFormatter(value.region);
    var c=countryFormatter(value.country);
    var cc=countryCodeFormatter(value.countryCode);
    return "<div class='first-colum-first-row' ><span class='table-row-title'>Region</span><span style='float:right' class='table-value boldi' >"+t+"</span></div> \
<div  style='margin-top:8px;' class='first-colum-first-row'><span class='table-row-title'>Country:</span><div style='float:right'> \
<span  class='table-value boldi'> "+c+"</span> \
<span style='color:black;' class='table-value boldi'>"+cc+"</span> \
</div></div> \
<div style='margin-top:18px;padding:10px;border:1px solid rgb(187, 187, 187);'><img src='http://localhost:9001/img/maps/"+value.region+".png' width='100%'></div>";
}
function middleSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function middleFormatter(value) {
    return "<div class='middle-column'><h2 class='middle-column-title'>"+titleFormatter(value.title)+"</h2> \
"+wrap_show_less("eval-text", value.description)+" \
<h3 class='middle-column-sectors'>Sectors:</h3> "+wrap_show_less("eval-sectors", sectorsFormatter(value.sectors))+"<hr class='middle'>";
}
function rightSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function rightFormatter(value) {
    var t=typeFormatter(value.type);
    var year=+value.year;
    var iP= value.implementationPeriod;
    return "<div class='table-type ' style='margin-top:8px;'>Type<span style='float:right' class='table-type'>"+t+"</span></div> \
<p class='table-type' style='margin-top:8px;'>Year:<span style='float:right'>"+year+"</span></p> \
<hr><p style='margin-top:8px;'>Implementation Period: <span style='float:right'>"+iP+"</span></p><br> "+value.lastUpdate+"</div>;"


}
function yearFormatter(value){
    return value;
}

var resultTableOptions = {
    method: 'get',
    cache: false,
    //            height: 400,
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
    //	sortName: "region",
    icons: {
	paginationSwitchDown: 'fa-collapse-down icon-chevron-down',
	paginationSwitchUp: 'fa-collapse-up icon-chevron-up',
	refresh: 'fa-refresh icon-refresh',
	toggle: 'fa-list-alt icon-list-alt',
	columns: 'fa-th icon-th'
    },
    data:[
        {
            "left": {region: "Africa", country:"Angola", countryCode:"AGO"},
            "middle": {title: "Diagnostic Trade Integration Study - Angola",
                description:"The document analyzes the current economic situation and the determinants of poverty in Angola, and it outlines policy actions in ten main areas of intervention: 1) probation; 2) demining; 3) food security and rural development; 4) HIV/AIDS; 5) Education; 6) Health; 7) Basic infrastructures; 8) professional training and employment; 9) governance; 10) macroeconomic governance. \
The DTIS provides an overview of the current economic situation in Angola and of the main issues regarding poverty and trade. It analyses the key problems affecting infrastructures, trade regime and institutions, commercial barriers, trade facilitation and private sector development. \
The Programme of Cooperation is aligned with the Common Country Programme Document, the National Strategy for Development and Integration 2007-2013 and the Millennium Development Goals. Hence, the goal of the Programme is to promote fair and sustainable development, social inclusion, respect of international standards and obligations in light of the integration of Albania into the European Union. Specific expected outcomes are identified within four main areas of intervention: governance and rule of law, economy and environment, regional and local development, inclusive and social policy.", sectors:["Coffee", "Cashew","Farming" , "Lorem", "sector1", "sector2", "sector3", "sector4", "sector5", "sector6", "sector7", "sector8","Coffee", "Cashew","Farming" , "Lorem", "sector1", "sector2", "sector3", "sector4", "sector5", "sector6", "sector7", "sector8"]

            },
            "right": {type: "UNAAF",
                year:2006, implementationPeriod:"impl xxx",lastUpdate:"Thu May 28 2015"}

        },
        {
            "left": {region: "Africa", country:"Benin", countryCode:"BEN"},
            "middle": {title: "Diagnostic Trade Integration Study - Benin",
                description:"Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism,Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism", sectors:["Coffee", "Cashew","Farming" , "Lorem"]
            },

            "right": {type: "UNAAF",
                year:2005, implementationPeriod:"impl yyy",lastUpdate:"Fry Jul 13 2012"}
        },


    ],
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
};
var $resultTableContainer = $('.results-table');
var $resultTable = $resultTableContainer.find('table');
$resultTable.bootstrapTable(resultTableOptions);

var $tableHeadings = $resultTable.find('thead tr th');

$.each(resultTableOptions.columns, function(columnIdx, columnData){
	var $header = $($tableHeadings.get(columnIdx));
	$header.tooltip({
		title: columnData.description,
		container:$resultTableContainer
	});
});
$('.fixed-table-toolbar').prepend($('.pagination-detail').html()).addClass('text-muted');
$('#sorter').on('change', function() {
    var r={};
    $.extend(true, r , resultTableOptions);

    if(this.value=="1"){
        r.showHeader=true;
        r.showRefresh=false;
        r.data=[
        {
            "left": {region: "Africa", country:"Angola", countryCode:"AGO"},
            "middle": {title: "Diagnostic Trade Integration Study - Angola",
                description:"", sectors:["Coffee", "Cashew","Farming" , "Lorem"]
            },
            "right": {type: "UNAAF",
                year:2006, implementationPeriod:"impl xxx",lastUpdate:"Thu May 28 2015"}

            // "region": "Africa",
            // "country": "Angola",
            // "year":2006,
            // "type":"UNAAF",
            // "title":"Diagnostic Trade Integration Study - Angola",
            // "sectors":["Coffee", "Cashew","Farming" , "Lorem"],
            // "description":"",

        }];
        r.showColumns= true;        console.log(1, r);
    }else if(this.value=="2"){
        r.showHeader=false;
        r.showRefresh=true;
        console.log(2, r);
    }else{
        alert( this.value );
    }
    console.log("r", r);
    $('.results-table').find('table').bootstrapTable('destroy');
    $('.results-table').find('table').bootstrapTable( r);
});
