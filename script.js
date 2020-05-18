const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020-soc";

$(function (){
    $('.table').DataTable();
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
                <div class="panel-title-hp text-center"   id="ourschedule">
                    <div class="panel-title-shadow-hp">OUR SCHEDULE</div>
                    <div class="panel-title-hp-line">
                        <div class="panel-title-default-hp">OUR</div>
                        <div class="panel-title-highlight-hp">SCHEDULE</div>
                        <div class="panel-subtitle-hp hidden-xs"></div>
                    </div>
                </div>
                <select class="form-control">
                    <option value="">Export Basic</option>
                    <option value="all">Export All</option>
                    <option value="selected">Export Selected</option>
                </select>
                `);

                $("#table-head").html(`
                <tr>
                    <th class="th-sm" scope="row">ETA POL</th>
                    <th class="th-sm" scope="row">Port of Loading</th>
                    <th class="th-sm" scope="col">Port of Discharge</th>
                    <th class="th-sm" scope="row">ETA POD</th>
                    <th class="th-sm" scope="col">Vessel</th>
                    <th class="th-sm" scope="col">Vovage</th>
                    <th class="th-sm" scope="col">Est. Transit Time</th>            
                </tr>
                `)

                $('#table-data').append(`
                <tr>
                    <td>${allData["POL ETA"]}</td>
                    <td>${allData.POL}</td>                    
                    <td>${allData.POD}</td>
                    <td>${allData["POD ETA"]}</td>
                    <td>${allData.VESSEL}</td>
                    <td>${allData.VOYAGE}</td>
                    <td>${allData.TT}</td>
                </tr>
                `)

                $("#table-foot").html(`
                <tr>
                    <th class="th-sm" scope="row">ETA POL</th>
                    <th class="th-sm" scope="row">Port of Loading</th>
                    <th class="th-sm" scope="col">Port of Discharge</th>
                    <th class="th-sm" scope="row">ETA POD</th>
                    <th class="th-sm" scope="col">Vessel</th>
                    <th class="th-sm" scope="col">Vovage</th>
                    <th class="th-sm" scope="col">Est. Transit Time</th>      
                </tr>
                `);

            }
        })
    });
});



