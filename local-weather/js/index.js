    $(document).ready(function () {
      $temp_fahr = '';
      $temp_cel = '';
   
      function init_geo() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success);
          }
        }

      function success(position) {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        
        $api_link="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"";
       
        $.getJSON($api_link, function(data) {
          $icon=data.weather[0].icon;
          $location=data.name + ', ' + data.sys.country;
          $temp_kelvin = data.main.temp;
          $temp_cel = parseFloat(($temp_kelvin - 273.15).toFixed(1));
          $temp_fahr = parseFloat((($temp_kelvin - 273.15) * 9.0 / 5.0 + 32).toFixed(1));
          $temp_fahr = $temp_fahr;
          $temp_cel = $temp_cel;
          $static_src='http://openweathermap.org/img/w/';
          $img_src='<img src="'+$static_src+''+$icon+'.png'+'">';
          $weather_main=data.weather[0].main;
          $weather_description = data.weather[0].description;
          $humidity=data.main.humidity+"%";
          $windSpeed= data.wind.speed+" km/h";
         
          
                      
        $output='';
          $output=$output+"<h1>"+ $location + "</h1>";
          $output=$output+$img_src;
          $output=$output+"<h4>" + $weather_description+"</h4>"+"<br>"
          $(".weather").html($output);
          $(".temperature").html($temp_cel);
          $(".humitidy").html($humidity);
          $(".windSpeed").html($windSpeed);
         
                               
               });
                    
                }

                init_geo();
$("#cel").on("click", function() {
    $(".temperature").html($temp_cel).removeClass('fahrSymb').addClass( "celSymb" );
});
   
$("#fahr").on("click", function() {
    $(".temperature").html($temp_fahr).removeClass('celSymb').addClass( "fahrSymb" );
  });
    });