const FormatCurrency = value => {

    if(value == "") { return(""); }
    
    value = value.split(',');
    
    let decimale = value[1];

    decimale = decimale ? decimale : '00';
    decimale = decimale.length == 1 ? decimale+"0" : (decimale.length == 2 ? decimale : decimale.substring(0,2));

    return(value[0] + ',' + decimale);
}

export { FormatCurrency }