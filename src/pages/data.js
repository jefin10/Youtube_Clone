export const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


export const val_convert= (value) => {
    if (value >=1000000)
    {
        return Math.floor(value/1000000) +"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+ "K";
    }
    else{
        return value;
    }
}
