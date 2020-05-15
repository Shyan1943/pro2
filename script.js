const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020-soc";

$(function(){
    $('#search-btn').click(function(){
        window.open('sailing_schedule.html','_blank');
        // axios.get(APIURL, {
        //     params: {
        //         apikey:APIKEY
        //     }

        // }).then(function(response){
        //     let data = response.data;
        //     for (let allData of data){
                
        //         $('#table-data').append(`
        //         <tr>
        //             <td>${allData["POL"]}</td>
        //             <td>${allData["POD"]}</td>
        //             <td>${allData.VESSEL}</td>
        //         </tr>
        //         `);
        //     }
        // })

    });
});