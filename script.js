const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020-soc";

$(function(){
    $(".mydatatable").DataTable();
        responsive: true
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
                    <td><a href="mailto:box@wmgroup.com.sg?&subject=Booking%20Request%20:%20Singapore%20to%20${allData.POD}%20on%20${allData["POL ETA"]}%20vessel:%20${allData.VESSEL}%20V.${allData.VOYAGE}&body=Hi%20Booking%20department%20 (TEL:%20+65%2064761379),%0d%0dWe%20would%20like%20to%20book%20the%20following%20schedule.%20Here%20are%20my%20details:%0d%0dName%20:%0dContact Number%20:%0dFull Company Name%20:%0dNumber%20of%20Container%20:%0dPOL%20:%20${allData.POL},%20${allData["POL ETA"]}%0dPOD%20:%20${allData.POD},%20${allData["POD ETA"]}%0dVessel%20:%20${allData.VESSEL}%20V.${allData.VOYAGE}%0d%0dThanks%20and%20Regards%0d" rel="EMAIL"><button id="book-btn">Book</button></a></td>
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



