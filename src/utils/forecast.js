const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=83d5d1387ce1915a93908af171eb3d5c&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
          callback('Unable to connect to the internet',undefined)
        }else if(body.error){
            callback('unable to get the cordinates',undefined)
        }
         else{
             callback(undefined,body.current.weather_descriptions[0]+' .It is crrently '+body.current.temperature+' farenheit')
         }
    })
}




module.exports=forecast