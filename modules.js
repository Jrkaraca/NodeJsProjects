function datetime()
{
    let dt = new Date();
    //current Date
    let date = ("0" + dt.getDate()).slice(-2);

    //current Month
    let month = ("0" + (dt.getMonth() +1)).slice(-2);

    //current year
    let year = dt.getFullYear();
    
    //current year
    let hours = dt.getHours();
    
    //current year
    let minutes = dt.getMinutes();
    
    //current year
    let seconds = dt.getSeconds();

    var output = year + "-" + month + "-" + date + "-" + hours + ":" + minutes + ":" + seconds;
    return output;
}

module.exports = {datetime}