
export const calcTime=(time)=>{
    
    const t = new Date(time.replace(' ', 'T'));  
      
    let sep = t.toDateString().split(' ')
    let hours = t.getHours();
    let mins = t.getMinutes();
    let str = 'AM';
    if(hours>12){str='PM'}
    hours = hours%12;
    if(mins<10){mins = '0'+mins}
    sep[sep.length-1] = ', '+sep[sep.length-1];
    sep[2] = sep[2]+sep[3];
    
    return(sep.slice(1,3).join(' ')+' '+hours+':'+mins+' '+str)
}   