export const BATTERY=(callback)=>{

    const battery = Android.getBatteryPercentage();

    callback(battery);

};