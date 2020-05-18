const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020-soc";

$(function(){
    $('#search-btn').click(function(){
        axios.get(APIURL, {
            params: {
                apikey:APIKEY
            }
        }).then(function(response){
            let data = response.data;
            for (let allData of data){
                $('#toolbar').html(`
                <select class="form-control">
                    <option value="">Export Basic</option>
                    <option value="all">Export All</option>
                    <option value="selected">Export Selected</option>
                </select>
                `);

                $('#table-data').append(`
                <tr>
                    <td>${allData["POL"]}</td>
                    <td>${allData["POD"]}</td>
                    <td>${allData.VESSEL}</td>
                </tr>
                `);
            }
        })
    });
});

