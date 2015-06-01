function titleFormatter(value){
    return "<a href=\"search_details.html#\">"+value+"</a>";

}
function sectorsFormatter(value){
    return value.map(function(s){return "<span class=\"label label-default\">"+s+"</span>";}).join("<br>");


}
function typeFormatter(value){
    return "<span class=\"label label-default\">"+value+"</span>";
    }
function leftSorter(a, b) {
    return a.country.localeCompare(b.country);
}
function leftFormatter(value) {
    return value.region+" "+value.country+"/"+value.countryCode;
}
function middleSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function middleFormatter(value) {
    return "<h2>"+titleFormatter(value.title)+"</h2> \
"+wrap_show_less(value.description)+" \
<br> "+wrap_show_less(sectorsFormatter(value.sectors))+" <br> "+value.lastUpdate;
}
function rightSorter(a, b) {
    return a.title.localeCompare(b.title);
}
function rightFormatter(value) {
    var t=typeFormatter(value.type);
    var year=+value.year;
    var iP= value.implementationPeriod;
    return "<p class='table-type' style='margin-top:8px;'>Type<span style='float:right' class='table-type'>"+t+"</span></p> \
<hr><p class='table-type' style='margin-top:8px;'>Year:<span style='float:right'>"+year+"</span></p> \
<hr><p style='margin-top:8px;'>Implementation Period: <span style='float:right'>"+iP+"</span></p>" ;


}


function regionFormatter(value) {
    return value;
}
function countryFormatter(value) {
    return value;
}

function yearFormatter(value){
    return value;
}


function sectorsFormatter(value){
    return value.map(function(s){return "<span class=\"label label-default\">"+s+"</span>";}).join("<br>");


    }
var resultTableOptions = {
    method: 'get',
    cache: false,
    //            height: 400,
    striped: true,
    pagination: true,
    pageSize: 5,
    pageList: [10, 25, 50, 100, 200],
    search: false,
    showRefresh: false,
    showColumns: false,
    minimumCountColumns: 2,
    showHeader:false,
    clickToSelect: true,
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
The Programme of Cooperation is aligned with the Common Country Programme Document, the National Strategy for Development and Integration 2007-2013 and the Millennium Development Goals. Hence, the goal of the Programme is to promote fair and sustainable development, social inclusion, respect of international standards and obligations in light of the integration of Albania into the European Union. Specific expected outcomes are identified within four main areas of intervention: governance and rule of law, economy and environment, regional and local development, inclusive and social policy.", sectors:["Coffee", "Cashew","Farming" , "Lorem", "sector1", "sector2", "sector3", "sector4", "sector5", "sector6", "sector7", "sector8"],lastUpdate:"Thu May 28 2015"},
            "right": {type: "UNAAF",
                year:2006, implementationPeriod:"impl xxx"}

            // "region": "Africa",
            // "country": "Angola",
            // "year":2006,
            // "type":"UNAAF",
            // "title":"Diagnostic Trade Integration Study - Angola",
            // "sectors":["Coffee", "Cashew","Farming" , "Lorem"],
            // "description":"",

        },
        {
            "left": {region: "Africa", country:"Benin", countryCode:"BEN"},
            "middle": {title: "Diagnostic Trade Integration Study - Benin",
                description:"Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism", sectors:["Coffee", "Cashew","Farming" , "Lorem"],lastUpdate:"Fry Jul 13 2012"},

            "right": {type: "UNAAF",
                year:2005, implementationPeriod:"impl yyy"}

            // "region": "Africa",
            // "country": "Benin",
            // "year":2005,
            // "type":"UNAAF",
            // "title":"Diagnostic Trade Integration Study - Benin",
            // "sectors":["Coffee", "Cashew","Farming" , "Lorem"],
            // "description":"Agro-Processing Industry, Cashew, Cotton, Fisheries, Pineapple, Shea, Shrimp Farming,Tourism"
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
            class:"col-md-3"

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
            class:"col-md-6"
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
	// {
	//     field: "region",
	//     title: "Region",
	//     sortable: false,
	//     valign: "top",
	//     align: "left",
	//     description: "Geographic region where the country belongs",
        //     formatter:"regionFormatter"
	// },

	// {
	//     field: "country",
	//     title: "Country",
	//     description: "Official country name",
	//     sortable: false,
	//     valign: "top",
	//     align: "left",
        //     formatter:"countryFormatter"
	// },

	// {
	//     field: "year",
	//     title: "Year",
	//     sortable: true,
	//     valign: "top",
	//     align: "left",
	//     description: "Year of approval of the document",
        //     formatter:"yearFormatter"
	// },


	// {
	//     field: "type",
	//     title: "Type",
	//     description: "Document type",
	//     sortable: true,
	//     valign: "top",
	//     align: "left",
        //     formatter:"typeFormatter"
	// },

	// {
	//     field: "title",
	//     title: "Title",
	//     description: "Title of the document",
	//     sortable: true,
	//     valign: "top",
	//     align: "left",
        //     formatter:"titleFormatter"

	// },

	// {
	//     field: "sectors",
	//     title: "Sectors",
	//     description: "Sector categories to be displayed in the TSM",
	//     sortable: true,
	//     valign: "top",
	//     align: "left",
        //     formatter:"sectorsFormatter"
	// },
	// {
	//     field: "description",
	//     title: "Description",
	//     description: "Brief description of the document",
	//     sortable: true,
	//     valign: "top",
	//     align: "left"
	// },
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
                description:"", sectors:["Coffee", "Cashew","Farming" , "Lorem"],lastUpdate:"Thu May 28 2015"},
            "right": {type: "UNAAF",
                year:2006, implementationPeriod:"impl xxx"}

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
