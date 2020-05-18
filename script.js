const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020-soc";

$(function (){
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
});

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

                $("#table-head").html(`
                <tr>
                    <th class="th-sm" scope="row">Port of Loading</th>
                    <th class="th-sm" scope="col">Port of Discharge</th>
                    <th class="th-sm" scope="col">Vessel</th>
                    <th class="th-sm" scope="col">Vovage</th>
                    <th class="th-sm" scope="col">Est. Transit Time</th>            
                </tr>
                `)

                $('#table-data').append(`
                <tr>
                    <td>${allData["POL"]}</td>
                    <td>${allData["POD"]}</td>
                    <td>${allData.VESSEL}</td>
                </tr>
                `)

                $("#table-foot").html(`
                <tr>
                    <th class="th-sm" scope="row">Port of Loading</th>
                    <th class="th-sm" scope="col">Port of Discharge</th>
                    <th class="th-sm" scope="col">Vessel</th>
                    <th class="th-sm" scope="col">Vovage</th>
                    <th class="th-sm" scope="col">Est. Transit Time</th>            
                </tr>
                `);

            }
        })
    });
});



